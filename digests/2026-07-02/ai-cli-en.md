# AI CLI Tools Community Digest 2026-07-02

> Generated: 2026-07-02 01:51 UTC | Tools covered: 12

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Ollama](https://github.com/ollama/ollama)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Report - July 2, 2026

## Ecosystem Overview

The AI CLI tools ecosystem is experiencing a period of rapid maturation and consolidation, with established players like GitHub Copilot CLI and Claude Code leading in stability while newer entrants like Qwen Code and DeepSeek TUI are driving innovation in agent orchestration and specialized workflows. Cross-platform compatibility issues, particularly on Windows, remain a significant challenge across nearly all tools. Security and permission management have emerged as critical differentiators, with tools adopting varied approaches from constitution-based systems to traditional approval workflows. The community is increasingly demanding enterprise-grade features like session persistence, project-scoped configurations, and better integration with existing development toolchains.

## Activity Comparison

| Tool | Issues Updated | PRs Updated | Release Status | Community Engagement |
|------|---------------|-------------|----------------|---------------------|
| Claude Code | 10 | 2 | v2.1.198 (Major) | High - 96 comments on critical issues |
| OpenAI Codex | 10 | 10 | rust-v0.143.0-alpha.32 | High - Security-focused development |
| Gemini CLI | 10 | 10 | v0.51.0-nightly (Security fix) | Moderate - Quality assurance focus |
| GitHub Copilot CLI | 38 | 0 | v1.0.69-0 (Rapid iteration) | Very High - Strong issue engagement |
| Kimi Code CLI | 4 | 2 | No releases | Low - Branding transition issues |
| OpenCode | 10 | 10 | v1.17.13 (Stability) | Moderate - V2 migration focus |
| Pi | 25+ closed | 10 | Major cleanup cycle | High - Provider expansion |
| Qwen Code | 50 | 20 | v0.19.4 (Performance) | Very High - Rapid development |
| DeepSeek TUI | 10 | 10 | Pre-v0.8.67 (UX overhaul) | High - Architecture restructuring |
| ComfyUI | 29 | Multiple | No releases | High - Memory crisis response |
| Ollama | Multiple | 10 | Version regression issues | High - GPU compatibility focus |
| llama.cpp | Multiple | 10 | 6 releases (b9852-b9859) | Very High - Hardware optimization |

## Shared Feature Directions

**Session Management & Persistence** - Claude Code (#14292), OpenCode (#14292), and Copilot CLI (#3596) all struggle with project-scoped session storage and authentication persistence across restarts.

**Windows Platform Compatibility** - Critical issues reported across Claude Code (desktop launch failures), OpenAI Codex (sandbox execution), Gemini CLI (Wayland support), and OpenCode (path separators), indicating systemic Windows support challenges.

**Permission & Security Models** - DeepSeek TUI's constitution-first approach, Gemini CLI's security sandboxing (#19873), and OpenAI Codex's Git filter security patches show convergent evolution toward sophisticated permission systems.

**MCP (Model Context Protocol) Integration** - OpenAI Codex (#24103), OpenCode (HTTP streamable support), and Qwen Code (channel worker improvements) are all investing heavily in MCP standardization.

**Agent Orchestration** - Claude Code's multi-agent features, DeepSeek TUI's CodeWhale autonomy controls, and Qwen Code's subagent systems represent shared movement toward sophisticated AI agent workflows.

## Differentiation Analysis

**Enterprise vs Developer Focus**: GitHub Copilot CLI and Claude Code target enterprise integration with robust authentication and IDE compatibility, while DeepSeek TUI and Qwen Code emphasize developer productivity with terminal-first experiences.

**Architecture Philosophy**: OpenAI Codex prioritizes security-first development with extensive Git integration safety, Gemini CLI focuses on zero-dependency sandboxing, while Pi emphasizes cross-provider compatibility and model flexibility.

**User Experience Approaches**: ComfyUI and Ollama serve specialized ML workflows with performance optimization priorities, contrasting with conversational interfaces in Claude Code and OpenCode that emphasize natural language interaction.

**Technical Specialization**: llama.cpp leads in hardware optimization across diverse architectures, Qwen Code excels in mobile and messaging platform integration, while Kimi Code CLI appears to be repositioning toward code-specific workflows amid branding transitions.

## Community Momentum & Maturity

**High Momentum Leaders**: Qwen Code (50 active issues, rapid daemon improvements) and GitHub Copilot CLI (38 updated issues, consistent releases) demonstrate the strongest development velocity and community engagement.

**Maturing Platforms**: Claude Code and OpenAI Codex show signs of maturity with focus shifting from feature addition to stability and security hardening, evidenced by extensive security patch activity.

**Transition Phase**: OpenCode's V2 migration and DeepSeek TUI's constitution-first redesign indicate significant architectural evolution, while Kimi Code CLI's branding inconsistencies suggest organizational challenges.

**Infrastructure-Focused**: llama.cpp and Ollama maintain strong technical communities focused on hardware optimization and model compatibility, with llama.cpp's 6 releases in 24 hours showing exceptional development pace.

## Trend Signals

**Security-First Development**: The prevalence of security-focused PRs across OpenAI Codex, Gemini CLI, and Qwen Code indicates the ecosystem is maturing beyond proof-of-concept toward production-ready tools with enterprise security requirements.

**Cross-Platform Standardization Pressure**: Widespread Windows compatibility issues suggest the community is pushing for better platform parity, likely driven by enterprise adoption requirements.

**Agent Autonomy Boundaries**: Multiple tools are grappling with balancing AI agent autonomy (DeepSeek TUI's over-autonomy bugs, Claude Code's safety filters) versus user control, indicating this remains an unsolved UX challenge.

**Performance Infrastructure Investment**: Heavy focus on memory management (ComfyUI crisis, Ollama GPU detection issues) and hardware optimization (llama.cpp's constant updates) suggests performance rather than features is becoming the key differentiator.

**Ecosystem Consolidation**: The emergence of MCP as a shared integration standard and similar permission model patterns across tools suggests the ecosystem is converging toward interoperability standards, potentially setting the stage for tool specialization rather than feature duplication.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Analysis Period: 2026-07-02*

## Top Skills Ranking

**1. [skill-creator Evaluation Fix](https://github.com/anthropics/skills/pull/1298)** - Critical infrastructure repair addressing the core evaluation system that reports 0% recall regardless of skill performance. This foundational bug affects the entire skill optimization pipeline, making it the community's highest priority technical debt.

**2. [Document Typography Quality Control](https://github.com/anthropics/skills/pull/514)** - Addresses universal document generation problems (orphan wraps, widow paragraphs, numbering misalignment) that affect every Claude-generated document. High community interest due to immediate practical impact across all document workflows.

**3. [Self-Audit Reasoning Gate](https://github.com/anthropics/skills/pull/1367)** - Universal quality control skill that audits AI output across four dimensions (completeness, consistency, grounding, accuracy) before delivery. Recent submission gaining attention for its cross-domain applicability.

**4. [OpenDocument Format (ODT) Support](https://github.com/anthropics/skills/pull/486)** - Enables creation, parsing, and template filling for LibreOffice/OpenDocument files. Strong demand for open-source document format alternatives to proprietary formats.

**5. [Frontend Design Skill Enhancement](https://github.com/anthropics/skills/pull/210)** - Comprehensive revision focused on actionability and clarity for web development workflows. Long-running discussion indicates high community investment in development tooling.

## Community Demand Trends

- **Enterprise Integration**: Strong demand for organizational skill sharing ([#228](https://github.com/anthropics/skills/issues/228)) and SharePoint/enterprise document workflows
- **Security & Governance**: Growing interest in AI safety patterns and trust boundaries ([#492](https://github.com/anthropics/skills/issues/492), [#412](https://github.com/anthropics/skills/issues/412))  
- **Platform Integration**: Native OS automation (macOS AppleScript), AWS Bedrock compatibility, and MCP protocol exposure
- **Developer Tooling**: Testing patterns, color expertise, and comprehensive development workflow skills

## High-Potential Pending Skills

**[Testing Patterns Comprehensive Skill](https://github.com/anthropics/skills/pull/723)** - Full-stack testing methodology covering Testing Trophy model, unit testing, React components, and philosophy. Active refinement suggests near-term merge potential.

**[Color Expert Skill](https://github.com/anthropics/skills/pull/1302)** - Self-contained color expertise covering naming systems, color spaces, and practical applications. Recent submission with focused scope.

**[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** - Integration with SAP's open-source tabular foundation model for business analytics. Represents enterprise AI integration trend.

**[macOS Automation via AppleScript](https://github.com/anthropics/skills/pull/806)** - Native macOS automation alternative to screenshot-based computer use, with tiered permission system.

## Skills Ecosystem Insight

The community's most concentrated demand centers on **foundational infrastructure reliability** (evaluation system fixes) and **enterprise workflow integration** (document processing, organizational sharing, security governance), indicating maturation from experimental to production-ready skill deployment.

---

# Claude Code Community Digest - July 2, 2026

## Today's Highlights

Claude Code v2.1.198 brings Chrome integration to general availability and introduces agent notification hooks for better session management. However, the community is experiencing significant friction with safety filters blocking legitimate security auditing work, while Windows users face critical desktop launch failures and Cowork platform issues.

## Releases

**v2.1.198** ships three major updates:
- **Claude in Chrome** reaches general availability, expanding browser integration
- **Agent notifications** now fire `agent_needs_input` and `agent_completed` hooks for background sessions
- **New `/dataviz` skill** provides chart and dashboard design guidance (though users report it's not yet accessible)

## Hot Issues

1. **[#42776](https://github.com/anthropics/claude-code/issues/42776) - Windows Desktop Launch Failure** (96 comments, 39 👍)
   Critical bug preventing Windows users from relaunching Claude Desktop due to orphaned process locks. High engagement suggests widespread impact.

2. **[#38993](https://github.com/anthropics/claude-code/issues/38993) - Cowork File Sync Issues** (34 comments, 25 👍)
   Windows Cowork users experiencing truncated/stale files with virtiofs FUSE mounts, breaking development workflows.

3. **[#38005](https://github.com/anthropics/claude-code/issues/38005) - RTL Language Support** (31 comments, 66 👍)
   Strong community demand for Hebrew/Arabic RTL support in Desktop and Cowork, evidenced by high like ratio.

4. **[#72284](https://github.com/anthropics/claude-code/issues/72284) - Cowork Microphone Regression** (14 comments)
   Recent regression causing microphone input to cut off after 2 seconds on x64 Windows, while ARM64 works fine.

5. **[#73068](https://github.com/anthropics/claude-code/issues/73068) - Security Audit False Positives** (4 comments)
   Part of a concerning pattern where safety filters block legitimate security auditing of users' own applications.

6. **[#61682](https://github.com/anthropics/claude-code/issues/61682) - GitHub Connector Issues** (11 comments, 6 👍)
   Windows users reporting GitHub connector showing "Connected" status but failing to expose tools in Cowork.

7. **[#73081](https://github.com/anthropics/claude-code/issues/73081) - MCP Connector Regression**
   Hosted MCP connectors (Slack/M365) no longer inject into VS Code extension after v2.1.195, breaking workflows.

8. **[#73079](https://github.com/anthropics/claude-code/issues/73079) - SSH Remote Loop**
   macOS Desktop users experiencing permanent reconnect loops with SSH remotes after auto-update to 1.17377.2.

9. **[#73075](https://github.com/anthropics/claude-code/issues/73075) - WSL Focus Stealing**
   Windows Desktop watching WSL repos triggers focus-stealing behavior from WSLg processes after recent update.

10. **[#68992](https://github.com/anthropics/claude-code/issues/68992) - Stuck Background Tasks** (1 comment, 1 👍)
    CLI background tasks getting permanently stuck as "running" with no cancellation option, requiring session abandonment.

## Key PR Progress

Only 2 PRs updated in the last 24 hours:

1. **[#72866](https://github.com/anthropics/claude-code/pull/72866) - Documentation Fix**
   Simple typo correction changing "Github" to "GitHub" in README documentation.

2. **[#72543](https://github.com/anthropics/claude-code/pull/72543) - Incomplete Submission**
   Appears to be an incomplete or test submission with minimal content.

*Note: Unusually low PR activity suggests development focus may be on internal changes or the team is addressing the current stability issues.*

## Feature Request Trends

1. **Multi-agent Orchestration**: Requests for per-subagent advisor configuration ([#73072](https://github.com/anthropics/claude-code/issues/73072)) indicate growing demand for sophisticated agent workflows
2. **Accessibility & Internationalization**: Strong push for RTL language support and better localization of UI elements
3. **Enterprise Integration**: Continued requests for better MCP connector reliability and GitHub integration improvements
4. **Security Workflow Integration**: Users want legitimate security auditing capabilities without safety filter interference

## Developer Pain Points

1. **Safety Filter Over-Sensitivity**: Multiple reports of legitimate security auditing work being blocked by cybersecurity and AUP filters, creating significant workflow friction
2. **Windows Platform Instability**: Critical issues affecting Windows users across Desktop launch, Cowork file sync, and microphone functionality
3. **Version Regression Issues**: Recent updates introducing new bugs (MCP connectors, SSH remotes, WSL integration) suggesting insufficient testing
4. **Background Task Management**: CLI users experiencing stuck processes with no recovery options, forcing session abandonment
5. **Feature Announcement Gaps**: New features like `/dataviz` announced but not actually available, creating user confusion

The community appears to be experiencing a challenging period with stability issues overshadowing new feature releases.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest - July 2, 2026

## Today's Highlights

The Codex team released rust-v0.143.0-alpha.32 with continued stability improvements, while the community continues to grapple with significant Windows-specific issues around sandbox execution and file patching. Security-focused PRs dominate today's development activity, with multiple patches addressing Git filter execution vulnerabilities and patch application safety.

## Releases

- **rust-v0.143.0-alpha.32**: Latest alpha release focusing on core stability improvements and bug fixes in the Rust implementation.

## Hot Issues

1. **[#11023](https://github.com/openai/codex/issues/11023) - Codex Desktop Linux Support** (138 comments, 674 👍)  
   Strong community demand for native Linux desktop app due to power consumption issues on macOS. High engagement indicates significant Linux developer base.

2. **[#2847](https://github.com/openai/codex/issues/2847) - Sensitive File Exclusion** (91 comments, 456 👍, CLOSED)  
   Critical security feature request for `.codexignore` functionality to prevent sensitive file exposure. Recent closure suggests implementation progress.

3. **[#8648](https://github.com/openai/codex/issues/8648) - Context Confusion Bug** (71 comments, 55 👍)  
   Persistent issue where Codex responds to earlier messages instead of latest input, indicating conversation state management problems.

4. **[#9203](https://github.com/openai/codex/issues/9203) - Restore /undo Command** (54 comments, 312 👍)  
   High-priority developer safety feature for reverting untracked file deletions and uncommitted changes. Strong community support.

5. **[#29072](https://github.com/openai/codex/issues/29072) - Windows Sandbox Execution Failure** (31 comments, 22 👍)  
   Critical Windows bug preventing patch application due to sandbox setup executable path issues. Affects core functionality.

6. **[#29320](https://github.com/openai/codex/issues/29320) - Windows App Crash** (28 comments, 2 👍)  
   Recent Windows Store app displaying only error messages, updated today indicating ongoing Windows platform instability.

7. **[#4003](https://github.com/openai/codex/issues/4003) - Windows Line Ending Issues** (22 comments, 66 👍)  
   Long-standing Windows file corruption bug with mixed line endings in patched files, updated today with continued reports.

8. **[#16335](https://github.com/openai/codex/issues/16335) - CLI Performance Regression** (15 comments, 7 👍)  
   Significant performance degradation from CLI version 116 to 117, affecting Windows Terminal users.

9. **[#24103](https://github.com/openai/codex/issues/24103) - Meta Ads MCP OAuth Failure** (10 comments, 2 👍)  
   Official Meta Ads MCP integration failing OAuth with invalid_client_metadata errors, blocking enterprise integrations.

10. **[#30875](https://github.com/openai/codex/issues/30875) - GPT-5.5 Context Window Oscillation** (4 comments, 0 👍)  
    New issue with GPT-5.5 effective token limits fluctuating between 258K-353K tokens, potentially impacting large context workflows.

## Key PR Progress

1. **[#30883](https://github.com/openai/codex/pull/30883) - TTFT Telemetry Implementation**  
   Adding Time-To-First-Token metrics for performance monitoring and optimization of response streaming.

2. **[#30882](https://github.com/openai/codex/pull/30882) - Line Ending Preservation**  
   Direct fix for Windows line ending corruption (Issue #4003), preserving CRLF/LF terminators during patch application.

3. **[#30879](https://github.com/openai/codex/pull/30879) - Windows URL Security Fix**  
   Enhancing Windows command safety by handling mixed-case URLs in dangerous command detection.

4. **[#30876](https://github.com/openai/codex/pull/30876) - Interleaved Response Support**  
   Core infrastructure for handling reasoning summaries and responses that arrive out of order.

5. **[#30850](https://github.com/openai/codex/pull/30850) - Git Filter Security Hardening**  
   Blocking executable Git filters before patch staging to prevent arbitrary code execution vulnerabilities.

6. **[#30848](https://github.com/openai/codex/pull/30848) - Patch Application Security**  
   Comprehensive security fix preventing repository-controlled Git filters from executing during patch operations.

7. **[#30837](https://github.com/openai/codex/pull/30837) - Authoritative Patch Path Derivation**  
   Using Git's own path resolution to ensure patch safety checks protect the correct file paths.

8. **[#30627](https://github.com/openai/codex/pull/30627) - Unified Elicitation Service**  
   Consolidating MCP elicitation handling to prevent race conditions between tool results and user input.

9. **[#30315](https://github.com/openai/codex/pull/30315) - WebSocket Token Authentication**  
   Adding 256-bit token-based authentication for app-server WebSocket connections with optional enforcement.

10. **[#30213](https://github.com/openai/codex/pull/30213) - Code-Mode Integration Testing**  
    Expanding test coverage for code-mode functionality through standalone process hosting.

## Feature Request Trends

**Cross-Platform Desktop Apps**: Strong demand for Linux desktop app and better Windows stability. **Security & Privacy Controls**: `.codexignore` files, sensitive data exclusion, and workspace isolation. **Developer Safety Features**: Undo functionality, better change tracking, and safer file operations. **Enterprise Integration**: Improved MCP OAuth flows, corporate network compatibility, and remote device control. **Performance Optimization**: Context window management, reduced resource usage, and faster response times.

## Developer Pain Points

**Windows Platform Instability**: Multiple critical bugs affecting Windows users including sandbox failures, line ending corruption, and app crashes. **Context Management Issues**: Conversation state confusion and token limit fluctuations disrupting workflows. **Security vs. Usability**: Need for sensitive file protection while maintaining development velocity. **Enterprise Network Compatibility**: Corporate firewalls and policies blocking browser integration and OAuth flows. **Performance Regressions**: CLI slowdowns and resource consumption issues affecting productivity, particularly on resource-constrained systems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - July 2, 2026

## Today's Highlights

The Gemini CLI community continues to grapple with subagent reliability and security concerns as the project matures. Today's nightly release addresses a critical symbolic link directory escape vulnerability, while the community remains focused on improving agent behavior, memory system stability, and addressing persistent hanging issues that affect daily development workflows.

## Releases

**v0.51.0-nightly.20260702.gff00dacd9** shipped with a crucial security fix resolving symbolic link directory escape vulnerabilities in the memory import processor. This prevents malicious repositories from accessing files outside the intended workspace through crafted directory symbolic links.

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent Recovery Masking Failures** (P1, 9 comments): The `codebase_investigator` subagent incorrectly reports success even when hitting maximum turn limits, hiding critical interruptions from users. This breaks trust in agent status reporting.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent Infinite Hangs** (P1, 7 comments, 8 👍): A widespread issue where the generalist agent hangs indefinitely on simple operations like folder creation, forcing users to wait hours before canceling. Community workaround involves explicitly disabling subagents.

3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) - Shell Command Execution Stuck** (P1, 4 comments, 3 👍): Shell commands complete successfully but the UI remains stuck showing "Awaiting user input," breaking the development flow for basic CLI operations.

4. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Zero-Dependency OS Sandboxing** (P2, 8 comments): Ambitious proposal to leverage Gemini 3's native bash capabilities through secure POSIX tool chaining, representing a major architectural direction for safer model execution.

5. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) - Component-Level Evaluations** (P1, 7 comments): Follow-up to behavioral testing infrastructure with 76 tests across 6 Gemini models, indicating serious investment in quality assurance and testing reliability.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Underutilized Skills and Subagents** (P2, 6 comments): Users report that Gemini rarely uses custom skills or subagents automatically, requiring explicit instruction even for highly relevant tasks like gradle or git operations.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) - Auto Memory Logging Security** (P2, 5 comments): Security concern where Auto Memory sends content to models before redaction occurs, potentially exposing sensitive information in service logs.

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser Subagent Wayland Failures** (P1, 4 comments): Browser subagent completely fails on Wayland display systems, limiting Linux desktop compatibility for web automation tasks.

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - Tool Limit 400 Error** (P2, 3 comments): System breaks with 400 errors when more than 128 tools are available, suggesting need for intelligent tool scoping and prioritization.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) - Destructive Behavior Prevention** (P2, 3 comments): Concern about model using dangerous commands like `git reset --force` when safer alternatives exist, highlighting need for safety guardrails.

## Key PR Progress

1. **[#28103](https://github.com/google-gemini/gemini-cli/pull/28103) - OAuth Keep-Alive Socket Fix** (P2): Addresses "Premature close" failures in OAuth token exchange affecting Node.js security patch releases, critical for authentication reliability.

2. **[#28223](https://github.com/google-gemini/gemini-cli/pull/28223) - JSON/IPYNB File Corruption Fix**: Surgical fix preventing LLM correction from corrupting Jupyter notebooks and JSON files in `write_file` and `replace` operations.

3. **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) - Thought Leakage Resolution**: Eliminates internal model reasoning from leaking into chat history, preventing confusion and infinite loop monologues in subsequent turns.

4. **[#28232](https://github.com/google-gemini/gemini-cli/pull/28232) - Supply Chain Security Fix**: Addresses RCE vulnerability in eval workflows by splitting `pull_request_target` trigger, preventing malicious fork code execution with sensitive tokens.

5. **[#28167](https://github.com/google-gemini/gemini-cli/pull/28167) - Caretaker Egress Service**: Implements Cloud Run service skeleton for receiving verified action events via Pub/Sub, part of broader infrastructure automation efforts.

6. **[#28163](https://github.com/google-gemini/gemini-cli/pull/28163) - Triage Worker Foundation**: Core modules for Caretaker Agent Triage Worker, establishing automated issue management infrastructure.

7. **[#28094](https://github.com/google-gemini/gemini-cli/pull/28094) - Settings Deep Merge Fix** (P2): Fixes shallow merging of user and workspace settings that broke nested configuration sections like `tools` and `telemetry`.

8. **[#28112](https://github.com/google-gemini/gemini-cli/pull/28112) - MCP OAuth SSRF Protection**: Adds server-side request forgery validation to OAuth discovery flows, closing security gap in MCP server URL fetching.

9. **[#28068](https://github.com/google-gemini/gemini-cli/pull/28068) - Message Inspector Guards** (P2): Prevents misclassification of messages with empty parts arrays, fixing function call detection logic.

10. **[#28093](https://github.com/google-gemini/gemini-cli/pull/28093) - Telemetry Buffering Fix** (P2): Ensures chat compression telemetry waits for SDK initialization, preventing enterprise telemetry data loss.

## Feature Request Trends

The community is pushing for **enhanced agent reliability and autonomy** with better subagent integration, AST-aware code navigation tools, and improved memory systems. **Security and safety features** are increasingly requested, including destructive action prevention and better sandboxing. **Developer experience improvements** focus on terminal performance, external editor integration, and better trajectory sharing capabilities.

## Developer Pain Points

**Agent hanging and reliability issues dominate developer frustrations**, with subagents failing silently or hanging indefinitely on basic operations. **Configuration complexity** around settings merging and tool limitations creates setup barriers. **Security concerns** around memory logging and OAuth handling indicate growing enterprise adoption needs. **Platform compatibility gaps** on Wayland and various Node.js versions fragment the user experience across development environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest - July 2, 2026

## Today's Highlights

GitHub Copilot CLI saw two rapid releases (v1.0.69-0 and v1.0.68) addressing sandbox functionality, MCP session handling, and adding support for the kimi-k2.7-code model. The community remains active with 38 updated issues in the last 24 hours, showcasing strong engagement around configuration, authentication, and platform-specific challenges.

## Releases

**v1.0.69-0** introduced file and folder completion for `/sandbox` path entries and fixed critical session management issues including branch label updates and unnecessary MCP reloads. **v1.0.68** added support for the kimi-k2.7-code model, improved accessibility with chevron indicators for focused fields, and enhanced IDE tool reliability during connection interruptions.

## Hot Issues

**[#1665 - Project-Scoped Plugins](https://github.com/github/copilot-cli/issues/1665)** (18 👍, 10 comments) addresses a fundamental limitation where plugins are currently user-global rather than project-specific, creating challenges for team collaboration and repository-specific tooling.

**[#3596 - Authentication Error in Resumed Sessions](https://github.com/github/copilot-cli/issues/3596)** (11 👍, 8 comments) highlights a critical bug where model listing fails with "Not authenticated" errors in resumed sessions, though new sessions work fine.

**[#1504 - Custom Theme Support](https://github.com/github/copilot-cli/issues/1504)** (20 👍, 6 comments) requests expandable theming capabilities beyond basic options, with community interest in shareable JSON-based themes.

**[#3948 - Web Fetch Tool Failures](https://github.com/github/copilot-cli/issues/3948)** (4 comments) reports systematic failures of the web_fetch tool despite proper network connectivity for other CLI functions.

**[#3282 - Multiple BYOK Models](https://github.com/github/copilot-cli/issues/3282)** (11 👍, 4 comments) requests support for multiple Bring-Your-Own-Key models simultaneously, addressing current single-model limitations.

**[#3997 - GPT-5.3-Codex Availability Error](https://github.com/github/copilot-cli/issues/3997)** (3 comments) indicates potential model availability issues affecting web-based Copilot sessions.

**[#3331 - Auto-Update Plugins](https://github.com/github/copilot-cli/issues/3331)** (4 👍, 3 comments) proposes marketplace-driven automatic plugin updates to ensure teams stay current with plugin versions.

**[#3653 - Linux Sandbox Issues](https://github.com/github/copilot-cli/issues/3653)** highlights platform-specific problems with local sandbox mode on Linux systems.

**[#3158 - Infinite Planning Loop](https://github.com/github/copilot-cli/issues/3158)** (2 comments) documents a severe bug causing 217 planning cycles without execution, indicating context management issues.

**[#2958 - Per-Mode Model Configuration](https://github.com/github/copilot-cli/issues/2958)** (15 👍, 1 comment) requests separate default models for plan mode versus autopilot mode, reflecting different use case requirements.

## Key PR Progress

No pull requests were updated in the last 24 hours, indicating the development team is likely focused on internal development cycles or addressing the high volume of reported issues.

## Feature Request Trends

**Configuration Flexibility** dominates requests, with developers seeking project-scoped plugins, per-mode model defaults, and custom themes. **Authentication & Session Management** improvements are heavily requested, particularly around session persistence and multi-model support. **Platform Parity** remains important, with Windows and Linux users reporting distinct issues requiring platform-specific fixes.

## Developer Pain Points

**Session State Management** continues frustrating users with authentication failures and infinite loops during context management. **Plugin Ecosystem Limitations** hinder team collaboration due to user-scoped rather than project-scoped installations. **Platform-Specific Bugs** create inconsistent experiences across Windows, Linux, and web environments, particularly affecting sandbox functionality and clipboard operations. **Tool Reliability** issues with web_fetch and IDE connections interrupt workflows despite proper network configuration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**July 2, 2026**

## Today's Highlights

The community is actively addressing critical workflow issues, with focus on Windows terminal compatibility and long-running task management. A significant branding inconsistency has been identified across the ecosystem, highlighting the incomplete migration from "Kimi CLI" to "Kimi Code" naming.

## Releases

No new releases in the past 24 hours.

## Hot Issues

**[#2483](https://github.com/MoonshotAI/kimi-cli/issues/2483) - Branding Migration Inconsistency** ⭐  
The "Kimi CLI" → "Kimi Code" rebrand is only half-complete, with inconsistent naming across repository descriptions, extensions, SDKs, and binary paths. This creates ecosystem fragmentation that could confuse developers and users.

**[#640](https://github.com/MoonshotAI/kimi-cli/issues/640) - Infinite File Reading Loop** 🐛  
A critical bug where Kimi CLI gets stuck reading the same file repeatedly on Linux systems using custom Anthropic endpoints with mimo-v2-flash model. With 15 comments and active discussion, this appears to be affecting multiple users.

**[#2482](https://github.com/MoonshotAI/kimi-cli/issues/2482) - Long Goal Management** 💡  
Request to handle goals exceeding the 4000-byte limit by auto-saving to `goal.md` files and supporting in-CLI editing/pausing, similar to Codex's approach. This addresses a key limitation for complex, long-running tasks.

**[#1938](https://github.com/MoonshotAI/kimi-cli/issues/1938) - Push Notifications for Web Interface** 📱  
Recently closed enhancement request for push notifications in kimi-cli-web, particularly valuable for mobile Safari users who want task completion alerts when working remotely.

## Key PR Progress

**[#2481](https://github.com/MoonshotAI/kimi-cli/pull/2481) - Windows Clipboard Media Fix** 🔧  
Addresses a critical Windows Terminal and VS Code integration issue where Ctrl+V paste events fail silently for binary content like images. The fix implements clipboard media reading for BracketedPaste events.

**[#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369) - API Key Pool for Parallel Execution** ⚡  
Recently merged feature introducing `APIKeyPool` with round-robin allocation for parallel subagent execution, enabling better resource management and concurrent operations.

## Feature Request Trends

**Long-Running Task Management**: Multiple requests focus on better handling of extended workflows, including goal persistence, pause/resume functionality, and progress tracking for complex multi-step operations.

**Cross-Platform Integration**: Strong demand for improved Windows terminal compatibility and mobile web interface enhancements, indicating broader platform adoption beyond traditional Unix environments.

**Notification Systems**: Users want proactive alerts and status updates, particularly for web interface task completion and long-running operations.

## Developer Pain Points

**Platform Compatibility**: Windows users experiencing clipboard and terminal integration issues, particularly with media content and paste operations in modern terminal applications.

**Workflow Continuity**: The 4000-byte goal limit is becoming a significant bottleneck for developers working on complex, multi-phase projects requiring detailed specifications.

**Branding Confusion**: The incomplete CLI-to-Code migration is creating documentation and tooling fragmentation that may impact developer onboarding and ecosystem coherence.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - July 2, 2026

## Today's Highlights

OpenCode v1.17.13 shipped with critical fixes for reasoning model configurations and GitHub Copilot response handling. The community continues driving the ambitious V2 architecture migration with significant progress on TUI client updates, MCP improvements, and Windows path separator issues that have plagued session management across multiple platforms.

## Releases

**v1.17.13** addresses core stability issues:
- Forces reasoning mode for OpenAI-compatible reasoning models, ensuring custom deployments apply reasoning settings reliably
- Fixes stale GitHub Copilot response item ID replay that caused follow-up request failures  
- Desktop improvement allows question prompts to be minimized for better UX

## Hot Issues

1. **[#34359](https://github.com/anomalyco/opencode/issues/34359) TUI V2 Migration** (8 comments) - Critical infrastructure work migrating TUI from legacy SDK to new Promise client, blocking V2 adoption

2. **[#14292](https://github.com/anomalyco/opencode/issues/14292) Project-Scoped Session Storage** (11 comments, 18 👍) - High-demand feature to save conversations locally in project folders instead of global ~/.opencode directory

3. **[#21340](https://github.com/anomalyco/opencode/issues/21340) Windows Path Separator Bug** (8 comments) - Persistent Windows issue where Web UI can't display sessions due to backslash/forward slash mismatches in path handling

4. **[#9070](https://github.com/anomalyco/opencode/issues/9070) YOLO Mode** (9 comments) - Power user feature request for skipping permission prompts, similar to Claude's `--dangerously-skip-permissions` flag

5. **[#34765](https://github.com/anomalyco/opencode/issues/34765) V2 ChatGPT OAuth Failure** (3 comments) - V2 branch blocking issue where ChatGPT Pro subscriptions fail with HTTP 401 permissions errors

6. **[#8058](https://github.com/anomalyco/opencode/issues/8058) MCP HTTP Streamable Support** (9 comments) - Infrastructure gap preventing connection to major MCP servers like Sanity that use HTTP transport instead of SSE

7. **[#34820](https://github.com/anomalyco/opencode/issues/34820) Persistent Alert Errors** (3 comments) - User experiencing continuous alert errors despite app updates and reinstalls

8. **[#11298](https://github.com/anomalyco/opencode/issues/11298) Scroll Navigation Issues** (4 comments) - UX problem preventing users from scrolling up to review previous AI responses in chat history

9. **[#34723](https://github.com/anomalyco/opencode/issues/34723) Session Disappearance on Windows** (2 comments) - Windows Desktop v1.17.12 bug where creating new sessions causes previous sessions to vanish from sidebar

10. **[#34813](https://github.com/anomalyco/opencode/issues/34813) Homebrew Publishing Stopped** (2 comments) - Distribution issue with Homebrew package stuck at v1.17.10 instead of current v1.17.13

## Key PR Progress

1. **[#31882](https://github.com/anomalyco/opencode/pull/31882) V2 Review Panel Overhaul** - Complete redesign of review panel with new UI and functionality for V2 architecture

2. **[#34819](https://github.com/anomalyco/opencode/pull/34819) TUI Onboarding Fix** - Clears onboarding state after provider connection, improving first-run experience

3. **[#30367](https://github.com/anomalyco/opencode/pull/30367) Windows Path Normalization** - Fixes session list empty state by normalizing Windows directory paths in SQL queries

4. **[#34242](https://github.com/anomalyco/opencode/pull/34242) Piped Stdin UI Fix** - Prevents piped stdin from breaking TUI keyboard input, addressing multiple reported issues

5. **[#34815](https://github.com/anomalyco/opencode/pull/34815) Per-Variant Limit Overrides** - Enables model variants to have different context limits (e.g., 200k preset alongside standard)

6. **[#33875](https://github.com/anomalyco/opencode/pull/33875) Session Scroll Preservation** - Maintains scroll position when switching between session tabs

7. **[#34814](https://github.com/anomalyco/opencode/pull/34814) Agent Order Preservation** - Removes alphabetical sorting to maintain user-defined primary agent insertion order

8. **[#34810](https://github.com/anomalyco/opencode/pull/34810) Composio MCP Documentation** - Adds Composio MCP server integration example to documentation

9. **[#34809](https://github.com/anomalyco/opencode/pull/34809) PowerShell Title Fix** - Restores terminal title after PowerShell paste operations on Windows

10. **[#33554](https://github.com/anomalyco/opencode/pull/33554) Home/End Key Navigation** - Fixes broken Home and End key cursor movement in prompt input

## Feature Request Trends

**V2 Architecture Migration** dominates current development with systematic requests for porting V1 features: session forking APIs, file attachments, @-tagged references, plugin architectures, and MCP lifecycle management. **Windows Compatibility** remains a persistent theme with multiple path normalization and session management requests. **Developer Experience** improvements focus on permission streamlining, scroll behavior, and session persistence patterns.

## Developer Pain Points

**Windows Path Handling** continues plaguing multiple user workflows with session disappearance bugs across Web UI, Desktop, and TUI clients. **V2 Migration Complexity** creates feature gaps as core functionality gets ported between architectures. **Permission UX Friction** drives requests for bypass modes among power users. **Session Management Inconsistencies** between different OpenCode clients cause data visibility issues and workflow disruption.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - July 2, 2026

## Today's Highlights

The Pi development team closed a massive wave of 25+ issues and PRs on July 1st, indicating a major cleanup effort or release preparation. Key themes include model provider updates (Claude Sonnet 5 availability), authentication fixes, and infrastructure improvements like SQLite session storage and TypeScript extension AOT compilation. No new releases were published in the last 24 hours.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#5653](https://github.com/earendil-works/pi/issues/5653) - Move off Shrinkwrap** (18 comments)  
   Critical dependency management issue causing duplicate `pi-ai` packages with separate API provider registries, breaking module isolation.

2. **[#2870](https://github.com/earendil-works/pi/issues/2870) - Follow XDG Base Directory** (17 comments, 34 👍)  
   High community demand for Linux configuration standards compliance - most upvoted recent issue.

3. **[#6187](https://github.com/earendil-works/pi/issues/6187) - Pi login hangs in WSL after GitHub Copilot auth** (6 comments)  
   WSL compatibility issue where browser-based OAuth completes but CLI client doesn't detect authorization.

4. **[#5536](https://github.com/earendil-works/pi/issues/5536) - Split-turn compaction causes 429 on single-concurrency backends** (5 comments)  
   Auto-compaction fails on local `llama.cpp` setups due to parallel summarization requests overwhelming single-slot backends.

5. **[#6202](https://github.com/earendil-works/pi/issues/6202) - Kitty inline image preview renders blank** (5 comments)  
   Terminal compatibility issue where image previews reserve space but don't render in plain Kitty terminal.

6. **[#6215](https://github.com/earendil-works/pi/issues/6215) - pi update fails on 0.80.3 due to missing dependency** (4 comments)  
   Package installation broken due to unresolved `@smithy/node-http-handler@^4.9.1` dependency.

7. **[#6208](https://github.com/earendil-works/pi/issues/6208) - Add Claude Sonnet 5 to GitHub Copilot provider** (4 comments)  
   Model availability lag - Sonnet 5 is GA on GitHub Copilot but not yet in Pi's provider catalog.

8. **[#6132](https://github.com/earendil-works/pi/issues/6132) - Together.ai models to be deprecated July 10** (2 comments)  
   Urgent: Two Together.ai models (`GLM-5.1`, `Qwen3-235B`) being deprecated in 8 days.

9. **[#6206](https://github.com/earendil-works/pi/issues/6206) - Context window clamping prevents artificial limits** (2 comments)  
   Recent fix for context window handling now blocks legitimate use cases with artificial context limits.

10. **[#1335](https://github.com/earendil-works/pi/issues/1335) - Add default timeout for bash command** (3 comments)  
    Long-standing request for 120s default bash timeout to prevent infinite hanging commands.

## Key PR Progress

1. **[#6227](https://github.com/earendil-works/pi/pull/6227) - SQLite session storage** (Open)  
   Major infrastructure addition: parallel SQLite storage alongside JSONL for session transcripts under `PI_SQLITE_SESSION_STORAGE` flag.

2. **[#6213](https://github.com/earendil-works/pi/pull/6213) - AOT compilation for TypeScript extensions** (Closed)  
   Performance optimization reducing extension startup time from seconds to milliseconds using esbuild compilation.

3. **[#5678](https://github.com/earendil-works/pi/pull/5678) - Add excludeFromContext for custom messages** (Closed)  
   New API allowing custom messages to be persisted/rendered but excluded from model context during compaction.

4. **[#6216](https://github.com/earendil-works/pi/pull/6216) - Amazon Bedrock Mantle OpenAI provider** (Open)  
   New provider for Bedrock Mantle's OpenAI API supporting GPT 5.5 and 5.4 models.

5. **[#5262](https://github.com/earendil-works/pi/pull/5262) - Anthropic Vertex provider** (Open)  
   Claude integration for Google Cloud Vertex AI using thin adapter over existing Anthropic streaming.

6. **[#6230](https://github.com/earendil-works/pi/pull/6230) - Fix path relativization for bare root** (Closed)  
   Critical fix for file path handling when `find` relativizes from filesystem root directories.

7. **[#6225](https://github.com/earendil-works/pi/pull/6225) - Infer toolUse when provider omits finish_reason** (Closed)  
   Compatibility fix for OpenAI-compatible providers like NVIDIA NIM that don't send proper finish_reason chunks.

8. **[#2780](https://github.com/earendil-works/pi/pull/2780) - Argument-hint frontmatter in prompt templates** (Closed)  
   UX improvement showing expected arguments in autocomplete dropdown using `<required>` and `[optional]` syntax.

9. **[#6207](https://github.com/earendil-works/pi/pull/6207) - Claude Sonnet 5 for GitHub Copilot** (Closed)  
   Quick model addition bringing GitHub Copilot provider up to date with Anthropic provider.

10. **[#6205](https://github.com/earendil-works/pi/pull/6205) - Fix context-canvas composer overlay blocking clicks** (Closed)  
    UI fix preventing composer overlay from intercepting side panel button clicks.

## Feature Request Trends

- **Model Provider Expansion**: Strong demand for keeping all providers (GitHub Copilot, Bedrock, Fireworks) synchronized with latest model releases
- **Extension System Improvements**: Requests for tool calling APIs, better TypeScript support, and performance optimizations
- **Cross-Platform Compatibility**: WSL fixes, XDG directory standards, terminal-specific rendering improvements  
- **Developer Workflow Tools**: Timeout configurations, context management controls, authentication streamlining
- **Storage & Performance**: SQLite backends, session synchronization between machines, startup time optimization

## Developer Pain Points

- **Authentication Flow Issues**: Multiple reports of OAuth hanging in WSL and credential saving failures affecting GitHub Copilot integration
- **Package Management Instability**: Dependency resolution failures blocking updates, extension sync issues between machines
- **Terminal Compatibility**: Rendering artifacts in Kitty, spinner persistence, image preview inconsistencies across terminal emulators
- **Context Window Management**: Recent fixes creating new limitations, timeout handling causing misleading error messages
- **Model Provider Lag**: Frustration with delayed availability of new models across different providers, manual tracking of deprecations

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - July 2, 2026

## Today's Highlights

The Qwen Code project released v0.19.4 with significant daemon stability improvements and channel worker hardening. The community is actively addressing authentication issues, performance optimizations, and mobile UX enhancements, with 50 active issues and 20 pull requests updated in the last 24 hours.

## Releases

**v0.19.4** and **v0.19.4-nightly.20260702.46814e4f1** were released today, featuring:
- Enhanced daemon-managed channel worker stability with bounded restart supervision
- Improved session management and configurable auto-compact thresholds
- Updated daemon documentation reflecting recent architectural changes

## Hot Issues

1. **[#61 Qwen Code FAQ](https://github.com/QwenLM/qwen-code/issues/61)** (30 comments, 4 👍) - Critical documentation issue providing API key guidance for different regions, showing strong community engagement around setup processes.

2. **[#4888 IDEA Plugin UI Bug](https://github.com/QwenLM/qwen-code/issues/4888)** (11 comments) - High-priority IDE integration issue where user questions aren't displaying properly, affecting developer workflow.

3. **[#6094 QQ Bot Streaming Issues](https://github.com/QwenLM/qwen-code/issues/6094)** (5 comments) - Technical debt from PR #5902 causing cron/blockStreaming interaction problems and timing issues.

4. **[#4748 Daemon Performance Optimization](https://github.com/QwenLM/qwen-code/issues/4748)** (5 comments) - Performance-focused issue targeting 40% reduction in daemon cold start latency (2.5s → 1.5s).

5. **[#6077 Follow-up Suggestion Filter Bug](https://github.com/QwenLM/qwen-code/issues/6077)** (4 comments) - AI behavior issue where abbreviations are incorrectly filtered as multiple sentences.

6. **[#3696 Hot-Reload System Feature](https://github.com/QwenLM/qwen-code/issues/3696)** (4 comments) - High-priority developer experience enhancement for runtime reloading of skills and configurations.

7. **[#5979 Authentication Config Bug](https://github.com/QwenLM/qwen-code/issues/5979)** (3 comments) - Session management issue where `/auth` changes don't persist to new sessions.

8. **[#6119 Git-Ignore Inconsistency](https://github.com/QwenLM/qwen-code/issues/6119)** (3 comments) - File operation tools have inconsistent git-ignore handling between `list_directory` and `read_file`.

9. **[#6137 Terminal Flickering](https://github.com/QwenLM/qwen-code/issues/6137)** (2 comments) - Linux-specific UI issue affecting multiple terminal emulators.

10. **[#6144 Context Window Calculation Error](https://github.com/QwenLM/qwen-code/issues/6144)** (2 comments) - Model configuration issue with incorrect context window detection for Qwen3-Coder.

## Key PR Progress

1. **[#6148 CI Precheck Fix](https://github.com/QwenLM/qwen-code/pull/6148)** - Critical CI infrastructure improvement for PR safety prechecks using explicit GET requests.

2. **[#6114 Channel Lifecycle Status](https://github.com/QwenLM/qwen-code/pull/6114)** - Enhancement mapping channel task lifecycle events to native progress indicators across Telegram, Weixin, and DingTalk adapters.

3. **[#6128 Web Shell Accessibility Overhaul](https://github.com/QwenLM/qwen-code/pull/6128)** - Major UX improvement adding keyboard navigation, ARIA compliance, and IME-safe search to web dialogs.

4. **[#6105 Channel Identity Metadata](https://github.com/QwenLM/qwen-code/pull/6105)** - Foundation work for resident channel agents with identity metadata and task lifecycle hooks.

5. **[#6124 Tool Execution Timeout](https://github.com/QwenLM/qwen-code/pull/6124)** - Safety feature adding opt-in per-tool-call execution timeouts via `QWEN_CODE_TOOL_EXECUTION_TIMEOUT_MS`.

6. **[#6096 Zvec-Grep Bundled Skill](https://github.com/QwenLM/qwen-code/pull/6096)** - New semantic workspace search capability using `zg` CLI for open-ended code investigation.

7. **[#6123 Glob Performance Optimization](https://github.com/QwenLM/qwen-code/pull/6123)** - Performance improvement applying ignore rules during traversal instead of post-filtering.

8. **[#6146 Credential Redaction](https://github.com/QwenLM/qwen-code/pull/6146)** - Security enhancement adding credential redaction to worker stderr forwarding.

9. **[#6104 Memory Prompt Optimization](https://github.com/QwenLM/qwen-code/pull/6104)** - System prompt efficiency improvement with lazy-loaded memory sections when indexes are empty.

10. **[#6142 Mobile UX Improvements](https://github.com/QwenLM/qwen-code/pull/6142)** - Native app-like mobile experience with safe areas, overscroll fixes, and theme-colored backgrounds.

## Feature Request Trends

The community is prioritizing **hot-reload capabilities** for development workflow improvements, **fallback model chains** for reliability during rate limits, and **portable chat history** with project-local storage. There's strong demand for **comprehensive accessibility features** in web interfaces and **enhanced channel integrations** with lifecycle management.

## Developer Pain Points

**Authentication and session persistence** issues dominate developer frustrations, particularly around API key configuration and model switching. **Performance bottlenecks** in daemon startup times and file operations are frequent complaints. **Inconsistent behavior** across different deployment methods (Ollama, local models) and **mobile/terminal rendering issues** are causing workflow disruptions for the developer community.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest - July 2, 2026

## Today's Highlights

The community is intensely focused on the upcoming v0.8.67 release, which centers around a constitution-first setup wizard and improved user experience. Major discussions revolve around fixing CodeWhale's overly autonomous behavior and implementing proper security boundaries. Active development includes MCP server enhancements, cleanup of legacy code, and foundational work for the new setup system.

## Releases

No new releases in the past 24 hours.

## Hot Issues

1. **[#3275](https://github.com/Hmbown/DeepSeek-TUI/issues/3275) - CodeWhale Over-Autonomy Bug** (14 comments)  
   Critical regression where CodeWhale ignores user intent and enters self-driven loops. High community engagement suggests this severely impacts user experience and trust.

2. **[#3406](https://github.com/Hmbown/DeepSeek-TUI/issues/3406) - Runtime Security Posture Card** (13 comments)  
   Foundational security architecture for v0.8.67, establishing constitution boundaries that prevent silent security changes during runtime.

3. **[#3736](https://github.com/Hmbown/DeepSeek-TUI/issues/3736) - Work Mode vs Approval Policy Separation** (12 comments)  
   Addresses structural confusion in permission models where four overlapping configuration knobs create inconsistent behavior between UI display and actual permissions.

4. **[#2870](https://github.com/Hmbown/DeepSeek-TUI/issues/2870) - Command Boundary Refactor Epic** (10 comments)  
   Major architectural cleanup tracking smaller mergeable changes for command boundary improvements, indicating significant internal restructuring efforts.

5. **[#3793](https://github.com/Hmbown/DeepSeek-TUI/issues/3793) - Guided Constitution Creator** (10 comments)  
   Proposes replacing blank prompt editor with guided, localized constitution creator that maintains separation between autonomy settings and runtime security.

6. **[#3412](https://github.com/Hmbown/DeepSeek-TUI/issues/3412) - v0.8.67 Documentation Epic** (8 comments)  
   Comprehensive documentation overhaul for constitution-first setup, localization support, and updated screenshots reflecting the new user experience.

7. **[#3806](https://github.com/Hmbown/DeepSeek-TUI/issues/3806) - /constitution Command Enhancement** (8 comments)  
   Making `/constitution` the primary user-facing interface for constitution management, reducing need for users to understand internal context diagnostics.

8. **[#3864](https://github.com/Hmbown/DeepSeek-TUI/issues/3864) - Legacy .deepseek/ Directory Bug** (3 comments)  
   Post-rebrand issue where sub-agent state still persists to old `.deepseek/` directory instead of `.codewhale/`, causing confusion and potential data fragmentation.

9. **[#3867](https://github.com/Hmbown/DeepSeek-TUI/issues/3867) - Project-Scope Instructions Limitations** (2 comments)  
   Current instruction system lacks glob support and auto-discovery, making it nearly unusable for multi-project workflows where per-project rules are essential.

10. **[#3868](https://github.com/Hmbown/DeepSeek-TUI/issues/3868) - Windows Copy/Paste UI Bug** (2 comments)  
    Right-click context menu completely overrides the main GUI on Windows, indicating platform-specific UI rendering issues.

## Key PR Progress

1. **[#3866](https://github.com/Hmbown/DeepSeek-TUI/pull/3866) - Dynamic MCP Server Starting**  
   Enables LLMs to dynamically start MCP servers from conversation context, supporting both stdio and HTTP transports for enhanced tool integration.

2. **[#3861](https://github.com/Hmbown/DeepSeek-TUI/pull/3861) - Constitution-First Setup Foundation**  
   Core infrastructure for v0.8.67's constitution-first setup, implementing shared state model, persistence, and rendering foundation.

3. **[#3784](https://github.com/Hmbown/DeepSeek-TUI/pull/3784) - GUI Config Panel Persistence**  
   Adds nested-table config key persistence and fixes `allow_shell` type bug, enabling proper configuration saving in GUI panels.

4. **[#3865](https://github.com/Hmbown/DeepSeek-TUI/pull/3865) - Fix Sub-agent State Directory**  
   Resolves #3864 by ensuring sub-agent state persists to `.codewhale/` instead of legacy `.deepseek/` directory.

5. **[#3789](https://github.com/Hmbown/DeepSeek-TUI/pull/3789) - Safety Policy Status Display**  
   Adds safety policy visibility in `/status` command, showing current sandbox/network posture for different operational modes.

6. **[#3782](https://github.com/Hmbown/DeepSeek-TUI/pull/3782) - Hotbar Help Documentation**  
   Clarifies Hotbar shortcut documentation and terminal chord support, improving user understanding of available keyboard shortcuts.

7. **[#3764](https://github.com/Hmbown/DeepSeek-TUI/pull/3764) - Config Ask-Rules Diagnostics**  
   Improves `/config ask-rules` diagnostics for various `permissions.toml` states including missing, empty, valid, and malformed files.

8. **[#3748](https://github.com/Hmbown/DeepSeek-TUI/pull/3748) - Sakana AI Fugu Provider**  
   Adds Sakana AI as built-in provider with OpenAI-compatible API, supporting both standard and reasoning model variants.

9. **[#3822](https://github.com/Hmbown/DeepSeek-TUI/pull/3822) - Binary Release Asset Preference**  
   Improves update mechanism by preferring exact platform binary assets before falling back to archive matches.

10. **[#3879](https://github.com/Hmbown/DeepSeek-TUI/pull/3879) - Fleet Runtime Cleanup**  
    Removes legacy fleet runtime compatibility helpers that no longer have active call sites, part of ongoing code cleanup effort.

## Feature Request Trends

**Setup Experience Overhaul**: Strong demand for guided, constitution-first onboarding that feels like "starting CodeWhale" rather than editing configuration files. Users want localization support and clear separation between autonomy preferences and security controls.

**Enhanced MCP Integration**: Growing interest in dynamic MCP server management, allowing LLMs to discover and start tool servers contextually rather than requiring pre-configuration.

**Project-Scope Flexibility**: Requests for glob pattern support and auto-discovery in project instructions, enabling sophisticated multi-project workflows with per-project rules.

**Real-time State Reconciliation**: Need for live updates in UI components like the Agents sidebar to reflect actual sub-agent lifecycle states during complex operations.

## Developer Pain Points

**Permission Model Complexity**: The current four-knob permission system (`allow_shell`, `approval_mode`, `trust_mode`, `auto_approve`) creates confusion where UI display doesn't match actual behavior, indicating need for architectural simplification.

**Agent Autonomy Control**: Critical frustration with CodeWhale's tendency to over-extend scope and enter self-driven loops, suggesting the need for better user intent detection and confirmation workflows.

**Legacy Code Burden**: Significant ongoing cleanup effort removing unused components (approval cache containers, model registry helpers, fleet runtime helpers), indicating technical debt from rapid development cycles.

**Cross-Platform UI Issues**: Platform-specific problems like Windows copy/paste menu overlay suggest need for more robust cross-platform UI testing and handling.

**Documentation Lag**: Multiple documentation-focused issues indicate that rapid feature development has outpaced user-facing documentation, particularly around new constitution and setup systems.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest - July 2, 2026

## Today's Highlights

The ComfyUI community is actively addressing memory management and model loading performance issues, with 29 issues updated in the past 24 hours. Major focus areas include INT8 quantization support expansion, memory optimization bugs, and integration of cutting-edge models like LTX 2.3, Krea 2, and SeedVR2.

## Releases

No new releases in the past 24 hours.

## Hot Issues

**Memory & Performance Crisis:**
- **[#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618)** - Models reloading on every prompt change (24 comments, 👍1) - Critical performance regression affecting daily workflows
- **[#14705](https://github.com/Comfy-Org/ComfyUI/issues/14705)** - Models always reload from SSD despite available RAM (👍1) - Memory management not utilizing system resources efficiently
- **[#14703](https://github.com/Comfy-Org/ComfyUI/issues/14703)** - RAM filling up after recent updates - LTX 2.3 workflows becoming unusable due to memory leaks

**Model Compatibility Issues:**
- **[#14496](https://github.com/Comfy-Org/ComfyUI/issues/14496)** - Extremely slow model initialization on RTX 4090 (👍3) - Community frustrated with performance degradation
- **[#14692](https://github.com/Comfy-Org/ComfyUI/issues/14692)** - Krea 2 inconsistent results with smart-memory/dynamic-vram - Reproducibility concerns for production workflows
- **[#14715](https://github.com/Comfy-Org/ComfyUI/issues/14715)** - CLIPSetLastLayer crashes with Anima models - Blocking adoption of newer model architectures

**Hardware-Specific Problems:**
- **[#14714](https://github.com/Comfy-Org/ComfyUI/issues/14714)** - RTX 5090 + WAN 2.2 causing GPU driver crashes after v0.3.68 - Regression affecting high-end hardware users
- **[#14719](https://github.com/Comfy-Org/ComfyUI/issues/14719)** - LTX 2.3 system freezes on RTX 3080 Ti - Resolved by disabling CUDA backend
- **[#9922](https://github.com/Comfy-Org/ComfyUI/issues/9922)** - AMD GPU VRAM management causing model overflow (👍3) - Long-standing AMD support issues

**User Experience Regression:**
- **[#13890](https://github.com/Comfy-Org/ComfyUI/issues/13890)** - Drag-and-drop workflow loading broken since v0.21.0 (👍6) - Popular feature removal frustrating users

## Key PR Progress

**Major Model Integrations:**
- **[#14718](https://github.com/Comfy-Org/ComfyUI/pull/14718)** - Pixal3D and TRELLIS2 support with complete 3D mesh processing pipeline
- **[#14424](https://github.com/Comfy-Org/ComfyUI/pull/14424)** - SeedVR2 native support with conditioning and progressive sampling
- **[#14428](https://github.com/Comfy-Org/ComfyUI/pull/14428)** - JoyImageEdit native model support from the JoyAI team
- **[#14370](https://github.com/Comfy-Org/ComfyUI/pull/14370)** - SAM-3D-Body support with temporal smoothing and MediaPipe integration

**Infrastructure Improvements:**
- **[#14657](https://github.com/Comfy-Org/ComfyUI/pull/14657)** - Model downloader manager implementation
- **[#14699](https://github.com/Comfy-Org/ComfyUI/pull/14699)** - Asset system enabled by default, removing --enable-assets flag
- **[#14690](https://github.com/Comfy-Org/ComfyUI/pull/14690)** - Complete listAssets API contract with display_name, hash filtering

**Bug Fixes & Stability:**
- **[#14716](https://github.com/Comfy-Org/ComfyUI/pull/14716)** - Handle psutil.virtual_memory failures on macOS 27 beta
- **[#14713](https://github.com/Comfy-Org/ComfyUI/pull/14713)** - Fix Qwen3-VL tokenizer crashes with custom embeddings
- **[#14622](https://github.com/Comfy-Org/ComfyUI/pull/14622)** - Enable lowvram argument for MPS devices (Apple Silicon)

## Feature Request Trends

**Quantization Expansion:** Strong demand for INT8-ConvRot support across modern architectures (LTX-2.3, Flux-2-Klein, Qwen-Image) and requests for INT4 per-row quantization extending current protocols.

**Advanced 3D Workflows:** Growing interest in comprehensive 3D asset management with Save 3D Advanced node families and enhanced mesh processing capabilities.

**Memory Management Overhaul:** Community pushing for better RAM utilization, model caching improvements, and dynamic VRAM allocation across different hardware configurations.

## Developer Pain Points

**Memory Management Chaos:** Widespread reports of models not staying in RAM, constant SSD reloading, and memory leaks after recent updates are severely impacting developer productivity and workflow reliability.

**Hardware Fragmentation:** Inconsistent behavior across GPU vendors (NVIDIA vs AMD vs Intel XPU) and generations, with specific crashes on high-end hardware like RTX 5090 creating development roadblocks.

**Model Loading Performance:** Critical regression where model initialization has become extremely slow, with some developers reporting unusable speeds on previously well-supported hardware configurations.

**Breaking Changes Without Migration:** Features like drag-and-drop workflow loading removed without adequate replacement, forcing developers to adapt workflows mid-project.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest - July 2, 2026

## Today's Highlights

The Ollama community continues to grapple with significant GPU detection and performance regression issues across multiple platforms, with particular focus on AMD Strix Halo systems and NVIDIA GPU compatibility problems in version 0.30+. Active development is addressing critical memory management, multimodal capabilities, and the long-awaited metrics endpoint feature that has garnered substantial community support.

## Releases

No new releases in the last 24 hours.

## Hot Issues

**GPU Detection & Performance Regressions:**
- **[#16462](https://github.com/ollama/ollama/issues/16462)** - AMD Strix Halo VRAM detection regression in 0.30+ shows only 2GB instead of full system memory in containers (25 comments, 2 👍)
- **[#12976](https://github.com/ollama/ollama/issues/12976)** - Apple Silicon M1 performance regression in v0.12.9 causing GPU→CPU fallback during production demos (28 comments)
- **[#16957](https://github.com/ollama/ollama/issues/16957)** - NVIDIA 1080Ti experiencing 0xc0000005 errors preventing GPU offload (11 comments)

**Memory Management Issues:**
- **[#16617](https://github.com/ollama/ollama/issues/16617)** - Gemma4-12b unnecessarily offloading to CPU despite 1.3GB free VRAM, causing token rate drops (5 comments)
- **[#16968](https://github.com/ollama/ollama/issues/16968)** - Memory allocation failures with Gemma4:12b showing "failed to allocate buffer of size 2390753280" (4 comments)

**Network & Download Problems:**
- **[#1736](https://github.com/ollama/ollama/issues/1736)** - Persistent download slowdown at 99% completion, affecting all models for 2+ years (126 comments, 75 👍)
- **[#14868](https://github.com/ollama/ollama/issues/14868)** - Extremely slow model downloads dropping to sub-1KB/s despite 800mbps connection (8 comments)

**API & Integration Issues:**
- **[#16988](https://github.com/ollama/ollama/issues/16988)** - API compatibility problems with ornith models in Claude Code CLI showing parser generation failures (5 comments)
- **[#16946](https://github.com/ollama/ollama/issues/16946)** - llama-server core dumps when serving GPT-OSS with OLLAMA_KV_CACHE_TYPE=q8_0 (5 comments)

**Cloud Service Limitations:**
- **[#16060](https://github.com/ollama/ollama/issues/16060)** - International users unable to register for paid plans due to non-US phone number rejection (11 comments)

## Key PR Progress

**Core Infrastructure & Compatibility:**
- **[#16999](https://github.com/ollama/ollama/pull/16999)** - UTF-8-safe file operations for Windows Unicode path compatibility
- **[#16998](https://github.com/ollama/ollama/pull/16998)** - Prometheus-compatible `/metrics` endpoint implementation with scheduler observability
- **[#16996](https://github.com/ollama/ollama/pull/16996)** - Enable iGPU mmproj offload with fit padding for GB10 and Strix Halo systems

**Performance Optimizations:**
- **[#16983](https://github.com/ollama/ollama/pull/16983)** - Reduce automatic context sizing for large model fits to prevent VRAM overflow
- **[#16994](https://github.com/ollama/ollama/pull/16994)** - Enable Flash Attention on CUDA CC 6.x GPUs (Pascal architecture)

**Multimodal & Model Support:**
- **[#16879](https://github.com/ollama/ollama/pull/16879)** - Unified Gemma4 vision support with proper capability reporting
- **[#16919](https://github.com/ollama/ollama/pull/16919)** - Complete MLX engine create functionality rewrite with pipeline architecture

**Platform-Specific Fixes:**
- **[#16949](https://github.com/ollama/ollama/pull/16949)** - JetPack 7 fallback to standard CUDA when dedicated runner is absent
- **[#15535](https://github.com/ollama/ollama/pull/15535)** - Clipboard support for pasting images and files in chat interface

**Agent Framework:**
- **[#16963](https://github.com/ollama/ollama/pull/16963)** - Core agent harness with chat loops, tool execution, and approval handling

## Feature Request Trends

**Observability & Monitoring:** The `/metrics` endpoint (#3144) remains the top community request with 112 👍, seeking Prometheus integration for GPU utilization, memory usage, and request metrics. Cloud usage stats via API (#12532) also shows strong demand with 57 👍.

**Hardware Support Expansion:** Strong push for broader GPU compatibility including NVIDIA nvfp4 format support (#16056) and improved AMD integration, particularly for newer architectures like Strix Halo.

**Developer Experience:** Image paste functionality in UI (#12207), better error handling, and improved multimodal capabilities are consistently requested features.

## Developer Pain Points

**GPU Compatibility Crisis:** Version 0.30+ has introduced widespread GPU detection failures across NVIDIA, AMD, and integrated graphics, with users frequently reverting to 0.24.0 for stability. The community reports consistent patterns of models falling back to CPU despite adequate VRAM.

**Memory Management Instability:** Developers struggle with unpredictable memory allocation failures and inefficient VRAM usage, particularly with larger models where the scheduler incorrectly estimates available resources.

**Download Infrastructure:** The persistent 99% download slowdown issue (#1736) has plagued users for over two years, creating significant friction in model deployment workflows.

**Platform Fragmentation:** Growing complexity in supporting diverse hardware configurations (Jetson, Strix Halo, various CUDA generations) is creating maintenance overhead and user confusion about compatibility.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest - July 2, 2026

## Today's Highlights

Six new releases were published in the last 24 hours, featuring significant improvements to OpenCL kernel loading, Hexagon flash attention optimizations, and CUDA consistency enhancements. The community is actively addressing performance regressions on AMD GPUs and Turing architecture, while new model architectures like DeepSeek V4 and MiniMax-M3 are gaining traction with preliminary support implementations.

## Releases

- **b9859**: Added OpenCL precompiled binary kernel loading capability, enabling better hardware optimization through inline assembly access
- **b9858**: Fixed HuggingFace primary split handling as model path ([#25194](https://github.com/ggml-org/llama.cpp/issues/25194))
- **b9857**: Major Hexagon flash attention rework with performance optimizations and accuracy improvements
- **b9856**: Improved CUDA consistency with `__restrict__` usage and PDL (Parallel Decomposition Library) integration
- **b9855**: Added AVX2 optimization for nvfp4 dot product with UE4M3 LUT support
- **b9852**: Initial Q1_0 quantization support for OpenCL backend with Adreno GEMM/GEMV optimizations

## Hot Issues

1. **[#24181](https://github.com/ggml-org/llama.cpp/issues/24181)** - Step 3.7 Flash model gets stuck in reasoning loops during tool calls (78 comments) - Critical evaluation bug affecting automated workflows

2. **[#25158](https://github.com/ggml-org/llama.cpp/issues/25158)** - Stream connection lost with slow models after commit 1a87dcdc (19 comments) - Server stability issue impacting production deployments

3. **[#20029](https://github.com/ggml-org/llama.cpp/issues/20029)** - AMD GPU Vulkan producing garbage output on Mac x86 (28 comments) - Long-standing compatibility issue affecting Mac developers

4. **[#25062](https://github.com/ggml-org/llama.cpp/issues/25062)** - 50% performance loss on multiple AMD ISAs in build 9820 (7 comments, 5 👍) - Major regression requiring immediate attention

5. **[#25162](https://github.com/ggml-org/llama.cpp/issues/25162)** - Performance regression on Turing GPUs after commit 9e58d4d69 (2 comments, 5 👍) - 24-42% slowdown on RTX 20-series cards

6. **[#19482](https://github.com/ggml-org/llama.cpp/issues/19482)** - ROCm hangs when loading larger models (11 comments, 6 👍) - Memory management issue blocking AMD GPU adoption

7. **[#25171](https://github.com/ggml-org/llama.cpp/issues/25171)** - DeepSeek V4 Flash memory issues (4 comments) - New model architecture compatibility problems

8. **[#24492](https://github.com/ggml-org/llama.cpp/issues/24492)** - Gemma 4 31B crashes on Vulkan backend with pre-allocated tensor errors (8 comments, 2 👍) - Large model stability concern

9. **[#25061](https://github.com/ggml-org/llama.cpp/issues/25061)** - CUDA cuBLAS error during large context processing (7 comments) - Enterprise deployment blocker

10. **[#19256](https://github.com/ggml-org/llama.cpp/issues/19256)** - CLI output redirection broken (14 comments, 1 👍) - Basic functionality regression affecting automation

## Key PR Progress

1. **[#25202](https://github.com/ggml-org/llama.cpp/pull/25202)** - Fixes quantized KV-cache for DeepSeek V4's compressed attention mechanisms (CSA/HCA)

2. **[#24407](https://github.com/ggml-org/llama.cpp/pull/24407)** - Intel Xe GPU Vulkan GEMM optimizations (part 3/3) targeting Xe-LPG Plus, Xe2, and Xe3 architectures

3. **[#25151](https://github.com/ggml-org/llama.cpp/pull/25151)** - Implements COL2IM_1D CUDA operation, completing the IM2COL/COL2IM pair for convolution support

4. **[#25214](https://github.com/ggml-org/llama.cpp/pull/25214)** - Adds `--no-sleep` flag to prevent VRAM eviction on headless secondary GPUs through periodic heartbeat operations

5. **[#25212](https://github.com/ggml-org/llama.cpp/pull/25212)** - Fixes ROCm mmap loading issues for large models by implementing CUDA-style staging buffers

6. **[#24162](https://github.com/ggml-org/llama.cpp/pull/24162)** - DeepSeek V4 architecture support with compressed sparse attention (CSA) and hierarchical compressed attention (HCA)

7. **[#24908](https://github.com/ggml-org/llama.cpp/pull/24908)** - MiniMax-M3 support featuring MiniMax Sparse Attention (MSA) for 60-layer MoE models

8. **[#25113](https://github.com/ggml-org/llama.cpp/pull/25113)** - Vision capabilities for MiniMax-M3 with 3-axis RoPE and two-stage processing

9. **[#24898](https://github.com/ggml-org/llama.cpp/pull/24898)** - Implements dimensions parameter in embeddings endpoints for Matryoshka Representational Learning

10. **[#21160](https://github.com/ggml-org/llama.cpp/pull/21160)** - Cross-backend profiler for comprehensive performance analysis across all compute backends

## Feature Request Trends

**Multi-GPU Management**: Growing demand for better secondary GPU handling, VRAM management, and cross-backend load balancing. **Real-time Audio Processing**: Increased interest in Voxtral Mini 4B integration and OpenAI-compatible streaming speech protocols. **Enterprise Stability**: Focus on deterministic generation, cache management, and production deployment reliability. **Mobile/Edge Deployment**: Requests for Android NNAPI support, particularly for Google Tensor chips and Pixel devices.

## Developer Pain Points

**Performance Regressions**: Multiple reports of significant slowdowns across AMD and NVIDIA architectures requiring immediate investigation. **Backend Compatibility**: Ongoing issues with Vulkan stability on various GPU vendors, particularly AMD and Intel. **Memory Management**: ROCm large model loading failures and CUDA memory allocation issues blocking enterprise adoption. **Documentation Gaps**: Insufficient guidance for multi-backend deployments and optimization tuning. **Testing Coverage**: Need for better regression detection across the expanding matrix of hardware targets and model architectures.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*