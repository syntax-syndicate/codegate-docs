# Quick Start Guide

Get started with CodeGate in minutes using our Docker container.

## Docker Installation

Run CodeGate using Docker:

```bash
docker run -d -p 3000:3000 codegate/codegate
```

## Configuration

Create a basic configuration file `codegate.yaml`:

```yaml
security:
  secret_detection: true
  package_scanning: true

providers:
  - name: anthropic
    enabled: true
```

## IDE Setup

### VSCode Setup

1. Install the CodeGate extension
2. Configure the endpoint in settings:

```json
{
  "codegate.endpoint": "http://localhost:3000"
}
```

### JetBrains Setup

1. Install the CodeGate plugin
2. Configure in Settings > Tools > CodeGate:
   - Set endpoint to `http://localhost:3000`

## Verification

Test your installation:

```bash
curl http://localhost:3000/health
```

You should see:

```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```

## Next Steps

- Read about [Secret Filtering](/docs/features/secret-filtering)
- Configure [Package Security](/docs/features/package-security)
- Set up [IDE Integration](/docs/features/ide-integration)
