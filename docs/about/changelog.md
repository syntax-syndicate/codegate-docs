---
title: Changelog
description: History of notable updates and changes to CodeGate
sidebar_position: 20
---

:::info

Major features and changes are noted here. To review all updates, see the
[GitHub Releases page](https://github.com/stacklok/codegate/releases).

:::

Related: [Upgrade CodeGate](../how-to/install.md#upgrade-codegate)

- **New integration: Open Interpreter** - xx Feb\
  2025 CodeGate v0.1.16 introduces support for
  [Open Interpreter](https://github.com/openinterpreter/open-interpreter) with
  OpenAI-compatible APIs. Review the
  [integration guide](../integrations/open-interpreter.mdx) to get started.

- **New integration: Cline** - 28 Jan, 2025\
  CodeGate version 0.1.14 adds support for [Cline](https://cline.bot/) with
  Anthropic, OpenAI, Ollama, and LM Studio. See the
  [integration guide](../integrations/cline.mdx) to learn more.

- **Workspaces** - 22 Jan, 2025\
  Now available in CodeGate v0.1.12, workspaces help you organize and customize
  your AI-assisted development. Learn more in
  [Workspaces](../features/workspaces.mdx).

- **New integration: aider** - 13 Jan, 2025\
  CodeGate version 0.1.6 adds support for [aider](https://aider.chat/), an AI
  pair programmer in your terminal. See the
  [integration guide](../integrations/aider.mdx) to learn more.

- **Semantic versioning for container image** - 8 Jan, 2025\
  Starting with v0.1.4, the CodeGate container image is published with semantic
  version tags corresponding to
  [GitHub releases](https://github.com/stacklok/codegate/releases). You can
  optionally pull using the major (`v0`), minor (`v0.1`), or patch version
  (`v0.1.4`) to explicitly control the version you're running. \
  CodeGate is evolving quickly, so we still recommend pulling the `latest` tag
  so you don't miss out on the newest features and updates.

- **UI port change** - 7 Jan, 2025\
  The internal port for the dashboard UI has changed from 80 to 9090 to resolve
  a permissions issue for Linux users.

- **Introducing CodeGate!** - 17 Dec, 2024\
  Initial public launch of CodeGate, with support for Continue and GitHub
  Copilot.
