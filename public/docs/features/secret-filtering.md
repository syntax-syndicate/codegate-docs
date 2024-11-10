# Secret and Token Filtering

CodeGate's secret filtering system protects your sensitive information from being accidentally exposed to AI models.

## How It Works

The secret filtering system automatically scans all prompts for:

- API keys and tokens
- Private keys and certificates
- Database credentials
- Environment variables
- Authentication tokens
- SSH keys
- AWS credentials

## Configuration

Enable and configure secret filtering in your `codegate.yaml`:

```yaml
security:
  secret_detection:
    enabled: true
    mask_secrets: true  # Replace secrets with [MASKED]
    patterns:
      - name: "API Key"
        regex: "api[_-]?key[_-]?[[:alnum:]]{32}"
      - name: "AWS Key"
        regex: "AKIA[0-9A-Z]{16}"
```

## Override Mechanism

Use the `#nogate` comment to bypass secret detection for testing:

```python
#nogate
api_key = "test-key-123"
```

## Best Practices

1. Always enable secret detection in production
2. Use environment variables for sensitive data
3. Regularly audit override usage
4. Configure custom patterns for your use case
5. Enable logging for security audits

## Example Usage

### Python Example

```python
# This will be blocked
api_key = "sk-1234567890abcdef"

# This will pass through
#nogate
test_key = "test-1234567890"
```

### JavaScript Example

```javascript
// This will be blocked
const apiKey = process.env.OPENAI_API_KEY;

// This will pass through
// #nogate
const testKey = 'test-key-123';
```

## Security Recommendations

1. Use environment variables
2. Implement proper secret management
3. Regular security audits
4. Monitor override usage
5. Train developers on security practices

## Related Topics

- [Package Security](/docs/features/package-security)
- [Basic Configuration](/docs/configuration/basic)
- [Advanced Options](/docs/configuration/advanced)
