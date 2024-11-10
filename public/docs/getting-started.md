# Getting Started with CodeGate

CodeGate is a privacy-focused local prompt gateway designed specifically for AI Code Generation within IDEs and Agentic workloads. This guide will help you get started with CodeGate and understand its key features.

## Quick Start

The fastest way to get started with CodeGate is using Docker:

```bash
docker run -d -p 3000:3000 codegate/codegate
```

## Features

### Secret and Token Filtering

CodeGate includes a robust Secret Blocking mechanism that automatically scans prompts for sensitive information:

- API keys and tokens
- Private keys and certificates
- Database credentials
- Environment variables

To override secret detection for testing purposes, use the `#nogate` comment:

```python
#nogate
api_key = "test-key-123"
```

### Malicious Package Detection

CodeGate performs security checks on all packages referenced in prompts or returned by the Language Model:

```javascript
// CodeGate will warn about any security issues in dependencies
import suspiciousPackage from 'suspicious-package';
```

### Secure Code Review

All code passing through CodeGate undergoes automatic security review:

- Identifies potential vulnerabilities
- Flags insecure coding patterns
- Suggests secure alternatives
- Ensures best practices compliance

## IDE Integration

### Cline Integration

To use CodeGate with Cline:

1. Install the Cline extension
2. Configure CodeGate endpoint:

```json
{
  "cline.gateway": "http://localhost:3000"
}
```

### continue.dev Integration

For continue.dev users:

1. Install continue.dev
2. Add CodeGate to your config:

```yaml
gateway:
  provider: codegate
  endpoint: http://localhost:3000
```

## AI Provider Support

CodeGate supports multiple AI providers:

- Local LLMs
- Anthropic
- OpenAI
- Open Router

Configure your preferred provider in `config.yaml`:

```yaml
ai_provider:
  name: anthropic
  api_key: ${ANTHROPIC_API_KEY}
```

## Advanced Configuration

Fine-tune CodeGate's behavior through environment variables or config file:

```yaml
security:
  secret_detection: true
  mask_secrets: true
  package_scanning: true
  code_review: true

providers:
  - name: anthropic
    enabled: true
  - name: openai
    enabled: false

ide_support:
  - cline
  - continue.dev
```

## Best Practices

1. Always run CodeGate locally for maximum privacy
2. Regularly update to get the latest security features
3. Use secret masking in production environments
4. Configure allowlists for trusted packages
5. Enable comprehensive logging in development

## Community and Support

- Join our [Discord community](https://discord.gg/codegate)
- Visit our [GitHub repository](https://github.com/codegate/codegate)
- Report issues and contribute
- Share your feedback and suggestions

## Next Steps

- Explore advanced features
- Configure for your specific use case
- Join the community
- Contribute to the project

Stay secure while leveraging the power of AI in your development workflow with CodeGate!
