# Merge reports
junitparser merge --glob "./target/surefire-reports/TEST-*"  "./target/surefire-reports/junit-report.xml"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "./target/surefire-reports/junit-report.xml"
