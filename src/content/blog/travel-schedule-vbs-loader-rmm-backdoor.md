---
title: "The \"Travel Schedule\" That Wasn't: Inside a Loader That Trojanizes a Real RMM Tool"
description: "A .vbs file disguised as a travel itinerary turned out to be a loader that silently installs a genuine ManageEngine Endpoint Central agent — pointed at an attacker's own server."
pubDate: 2026-08-11
tags: ["Security", "Malware Analysis", "Incident Response"]
draft: false
---

<div class="post-eyebrow is-live">Active campaign · Malware analysis</div>

<div class="post-badge-row">
  <span class="post-badge post-badge-critical">● Live infrastructure</span>
  <span class="post-badge post-badge-warn">Targets Malaysia</span>
  <span class="post-badge">VBScript loader</span>
  <span class="post-badge">RMM abuse</span>
</div>

<div class="post-callout post-callout-tldr">
  <div class="post-callout-title">TL;DR</div>
  <ul>
    <li>Received a <code>.vbs</code> file disguised as a travel itinerary. It's a first-stage loader — not the actual malware.</li>
    <li>It silently disables Windows UAC prompts, waits out sandbox analysis windows, then downloads a second stage.</li>
    <li>That second stage installs a <strong>real, legitimately-signed ManageEngine Endpoint Central agent</strong> — reconfigured to phone home to an attacker-controlled server instead of a real company's.</li>
    <li>End result: full remote administrative control, through software that most antivirus tools trust by default.</li>
    <li>This matches a campaign Microsoft publicly reported in March 2026 — and Malaysia is one of the hardest-hit regions.</li>
  </ul>
</div>

## The Bait

It arrived as `Travel Schedule .-2026.vbs` — a filename engineered for exactly one purpose: get opened without a second thought. No macro warning, no "protected view," just a script that Windows will happily run the moment it's double-clicked.

I didn't run it. Everything below came from reading it — static analysis only, nothing executed.

## Stage One — a Loader Built to Be Invisible

Strip away roughly 350 lines of decoy — fake SHA-256-looking hex strings and junk variables with randomized names — and four real behaviors are left:

- **Silences UAC.** Loops an elevated `reg add` command until `ConsentPromptBehaviorAdmin` reads back `0` — the setting that lets admin-level actions proceed without a confirmation prompt.
- **Waits out sandboxes.** Sleeps a randomized 30–80 seconds, well past the short analysis windows most automated malware sandboxes use.
- **Downloads a payload** from a Base64-hidden URL, spoofing a normal Chrome user-agent.
- **Removes the "downloaded from the internet" flag** from the file it just fetched — the flag that would otherwise trigger a SmartScreen warning — before running it.

<figure class="post-code-figure">

```vb
' the line that matters, isolated from ~350 lines of decoy padding
ATJ75 = "reg add ""HKLM\...\Policies\System"" /v ""ConsentPromptBehaviorAdmin"" /t REG_DWORD /d 0 /f"
Do
    If VHK31() Then Exit Do
    XCR70.ShellExecute "cmd.exe", "/c " & ATJ75, "", "runas", 0
Loop
```

<figcaption>The UAC-suppression loop, with the surrounding obfuscation noise removed for readability.</figcaption>
</figure>

## Stage Two — Where It Gets Interesting

The downloaded zip doesn't contain more malware in the usual sense. It contains a **complete, genuine ManageEngine Endpoint Central deployment package** — the exact kind of bundle an IT admin would use to remotely install monitoring software on a company laptop. `setup.bat` inside it is the real, unmodified ManageEngine setup wizard.

Sitting next to it is `setup1.vbs` — the file the first-stage loader specifically goes looking for by name. It runs the identical install command as the legitimate wizard, just silently and without asking:

<figure class="post-code-figure">

```
msiexec.exe /i "UEMSAgent.msi" TRANSFORMS="UEMSAgent.mst"
    ENABLESILENT=yes REBOOT=ReallySuppress
    SERVER_ROOT_CRT="DMRootCA-Server.crt" DS_ROOT_CRT="DMRootCA.crt" /qn
```

<figcaption><code>/qn</code> = fully silent install, no window, no user interaction. The certs point the agent at a server that isn't the one it should trust.</figcaption>
</figure>

A bundled config file, `DCAgentServerInfo.json`, tells the freshly-installed agent exactly which server to check in with:

<div class="post-table-wrap">
<table class="post-ioc">
<thead><tr><th>Field</th><th>Value</th><th>Why it's a red flag</th></tr></thead>
<tbody>
<tr><td>Server address</td><td class="mono">192.229.81.104:8383</td><td>Not any address tied to a real employer</td></tr>
<tr><td>Server name</td><td class="mono">WIN-1O46T0J662C</td><td>Default Windows machine name — never renamed</td></tr>
<tr><td>Customer / MSP name</td><td class="mono">DC_CUSTOMER / DC_MSP</td><td>Placeholder values, not a real org</td></tr>
</tbody>
</table>
</div>

## The Full Chain

Six hops, one deliberate handoff point: everything before step four is custom attacker code; everything from step four onward is unmodified, legitimately-signed software just pointed somewhere it shouldn't be.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 1320 380" role="img" aria-label="Attack chain: the malicious VBS lure suppresses UAC and evades sandboxes, downloads a zip, then hands off to a genuine ManageEngine installer which enrolls the machine with an attacker-controlled server, giving the attacker full remote access.">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
</marker>
</defs>

<line x1="650" y1="40" x2="650" y2="340" stroke="currentColor" stroke-opacity="0.25" stroke-dasharray="4 5"></line>
<text x="650" y="26" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace">CROSSES INTO "TRUSTED SOFTWARE"</text>

<line x1="200" y1="140" x2="238" y2="140" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#arrow)"></line>
<line x1="420" y1="140" x2="458" y2="140" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#arrow)"></line>
<line x1="640" y1="140" x2="678" y2="140" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#arrow)"></line>
<line x1="860" y1="140" x2="898" y2="140" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#arrow)"></line>
<line x1="1080" y1="140" x2="1118" y2="140" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#arrow)"></line>

<text x="219" y="120" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace">runs</text>
<text x="439" y="120" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace">fetches</text>
<text x="659" y="120" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace">installs</text>
<text x="879" y="120" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace">enrolls to</text>
<text x="1099" y="120" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.65" font-family="JetBrains Mono, monospace">grants</text>

<rect x="20" y="90" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="110" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">TRAVEL SCHEDULE</text>
<text x="110" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">.VBS</text>
<text x="110" y="170" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">the lure</text>

<rect x="240" y="90" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="330" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">UAC SUPPRESS</text>
<text x="330" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">+ SLEEP 30-80s</text>
<text x="330" y="170" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">defense evasion</text>

<rect x="460" y="90" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="550" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">KILMSSWM.ZIP</text>
<text x="550" y="146" text-anchor="middle" font-size="11" fill="currentColor" font-family="JetBrains Mono, monospace">kmmiiaaa.com</text>
<text x="550" y="170" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">MOTW stripped</text>

<rect x="680" y="85" width="180" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-primary)" stroke-width="2"></rect>
<text x="770" y="123" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">UEMSAGENT.MSI</text>
<text x="770" y="139" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.75">genuine, signed RMM tool</text>
<text x="770" y="158" text-anchor="middle" font-size="10.5" fill="var(--accent-primary)" font-weight="700" font-family="JetBrains Mono, monospace">installed /qn</text>
<text x="770" y="176" text-anchor="middle" font-size="9.5" fill="currentColor" fill-opacity="0.55">(silent, no window)</text>

<rect x="900" y="90" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="990" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">ROGUE SERVER</text>
<text x="990" y="148" text-anchor="middle" font-size="11" fill="currentColor" font-family="JetBrains Mono, monospace">192.229.81.104</text>
<text x="990" y="170" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">:8383</text>

<rect x="1120" y="90" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="1210" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">FULL REMOTE</text>
<text x="1210" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">CONTROL</text>
<text x="1210" y="166" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">exec · files · patch</text>

<text x="325" y="230" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.5">Custom malicious VBScript — this is the part AV usually catches</text>
<text x="985" y="230" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.5">Legitimate signed software — this is the part AV usually trusts</text>
</svg>
</div>
<figcaption>The attacker's own code only has to survive three steps. From the trojanized install onward, every action is performed by real ManageEngine software — just talking to the wrong server.</figcaption>
</figure>

## Whose Server Is It?

WHOIS traces the IP through two layers of resale before running out of road:

<div class="post-infra-chain">
  <div class="post-infra-node">SpeedVM / LeaseKVM<span class="post-infra-sub">California, US · ARIN allocation</span></div>
  <span class="post-infra-arrow">→ leases block to →</span>
  <div class="post-infra-node">Antbox Networks Ltd<span class="post-infra-sub">Hong Kong · serviced-office address</span></div>
  <span class="post-infra-arrow">→ rented by →</span>
  <div class="post-infra-node">? unknown<span class="post-infra-sub">the actual operator</span></div>
</div>

Both allocation layers list their abuse contact as a generic `@outlook.com` address rather than a company domain — a pattern typical of low-verification VPS resale, which is exactly what makes infrastructure like this cheap and easy to rent for a short-lived campaign. It doesn't identify the attacker; it just confirms the server sits on infrastructure built for exactly this kind of disposability.

## Not a One-Off

The chain here — a document-style lure → VBS loader → UAC bypass → trojanized ManageEngine Endpoint Central agent — matches a campaign **Microsoft's Security Blog reported in March 2026**. Their writeup names Malaysia as one of the regions hit hardest, with other regions seeing follow-on banking trojans or reconnaissance consistent with staging for ransomware or data theft.

## Indicators of Compromise

<div class="post-table-wrap">
<table class="post-ioc">
<thead><tr><th>Type</th><th>Value</th><th></th></tr></thead>
<tbody>
<tr><td>Lure filename</td><td class="mono">Travel Schedule .-2026.vbs</td><td><span class="post-tag-pill">stage 1</span></td></tr>
<tr><td>SHA-256</td><td class="mono">c82b4a449b4584160e1f7c854c34e3410fe40e5ef8bbda60e7ca56875764f568</td><td></td></tr>
<tr><td>C2 domain</td><td class="mono">lion.kmmiiaaa.com</td><td><span class="post-tag-pill">network</span></td></tr>
<tr><td>C2 server</td><td class="mono">192.229.81.104:8383</td><td><span class="post-tag-pill">network</span></td></tr>
<tr><td>Payload file</td><td class="mono">setup1.vbs</td><td><span class="post-tag-pill">stage 2</span></td></tr>
<tr><td>SHA-256</td><td class="mono">3d1a86ad729817d85377f59c3d5dcc67ba59af9824ae64aea8e626f6a4956d52</td><td></td></tr>
<tr><td>Dropped install path</td><td class="mono">C:\Users\Public\Videos\Temp\</td><td><span class="post-tag-pill">host</span></td></tr>
<tr><td>Registry key</td><td class="mono">...\Policies\System\ConsentPromptBehaviorAdmin = 0</td><td><span class="post-tag-pill">host</span></td></tr>
</tbody>
</table>
</div>

<div class="post-callout post-callout-action">
  <div class="post-callout-title">If you've seen this file</div>
  <ul>
    <li>Don't run it. If you already did, treat the machine as potentially compromised, not just "at risk."</li>
    <li>Check installed programs for an unexpected "Endpoint Central Agent" / ManageEngine entry you didn't install.</li>
    <li>Check the registry key above — if it's set to <code>0</code> and you didn't set it, something ran on this machine.</li>
    <li>Block <code>kmmiiaaa.com</code> and <code>192.229.81.104</code> at the network level if you're on a managed network.</li>
    <li>If it arrived via WhatsApp or another messaging app, that contact/account is now a known vector — flag it.</li>
  </ul>
</div>
