# Basic Configuration

Configure CodeGate using a simple YAML configuration file.

## Configuration File

Create a `codegate.yaml` file in your project root:

```yaml
# Basic CodeGate configuration
security:
  secret_detection: true
  package_scanning: true
  code_review: true

providers:
  - name: anthropic
    enabled: true
    api_key: ${ANTHROPIC_API_KEY}
  
  - name: openai
    enabled: false
    api_key: ${OPENAI_API_KEY}

ide_support:
  - name: vscode
    enabled: true
  - name: jetbrains
    enabled: true

logging:
  level: info
  file: codegate.log
```

## Environment Variables

CodeGate supports environment variables in the configuration:

```bash
export ANTHROPIC_API_KEY="your-api-key"
export CODEGATE_LOG_LEVEL="debug"
```

## Configuration Options

### Security Settings

- `secret_detection`: Enable/disable secret detection
- `package_scanning`: Enable/disable package security scanning
- `code_review`: Enable/disable secure code review

### Provider Settings

- `name`: Provider name (anthropic, openai)
- `enabled`: Enable/disable the provider
- `api_key`: API key for authentication

### IDE Support

- `name`: IDE name (vscode, jetbrains)
- `enabled`: Enable/disable IDE support

### Logging

- `level`: Logging level (debug, info, warn, error)
- `file`: Log file location

## Next Steps

- Learn about [Advanced Configuration](/docs/configuration/advanced)
- Set up [IDE Integration](/docs/features/ide-integration)
- Configure [Package Security](/docs/features/package-security)
