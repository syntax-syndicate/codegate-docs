# Package Security

CodeGate's package security system helps protect your codebase from malicious or vulnerable dependencies.

## Features

- Automatic package scanning
- Vulnerability detection
- License compliance checking
- Supply chain attack prevention
- Version pinning recommendations

## How It Works

The package security system scans:

- Direct dependencies
- Transitive dependencies
- Development dependencies
- Package lockfiles
- Installation scripts

## Configuration

Enable and configure package security in your `codegate.yaml`:

```yaml
security:
  package_scanning:
    enabled: true
    scan_depth: full  # or 'direct' for only direct dependencies
    block_high_severity: true
    licenses:
      allowed: ["MIT", "Apache-2.0", "BSD-3-Clause"]
      blocked: ["GPL-3.0"]
```

## Vulnerability Detection

CodeGate checks for:

- Known vulnerabilities (CVEs)
- Malicious code patterns
- Suspicious installation scripts
- Outdated dependencies
- Supply chain risks

## Best Practices

1. Enable automatic scanning
2. Configure severity thresholds
3. Maintain an allowed license list
4. Regular dependency updates
5. Monitor security advisories

## Example Usage

### Package Installation

```bash
# CodeGate will scan before installation
npm install express

# Override for testing
npm install express --no-codegate
```

### CI/CD Integration

```yaml
# GitHub Actions example
steps:
  - uses: actions/checkout@v2
  - name: Setup CodeGate
    uses: codegate/setup-action@v1
  - name: Install dependencies
    run: npm install
```

## Security Recommendations

1. Use lockfiles
2. Pin dependency versions
3. Regular security audits
4. Monitor dependency updates
5. Review installation scripts

## Related Topics

- [Secret Filtering](/docs/features/secret-filtering)
- [Basic Configuration](/docs/configuration/basic)
- [Advanced Options](/docs/configuration/advanced)
