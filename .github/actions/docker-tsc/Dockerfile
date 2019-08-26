FROM ruby:2-slim

LABEL "name"="TypeScript Builder"
LABEL "maintainer"="S0AndS0 <support+mail.S0AndS0@gmail.com>"
LABEL "version"="0.0.1"

LABEL "com.github.S0AndS0.name"="TypeScript Builder"
LABEL "com.github.S0AndS0.description"="Action for TypeScript transpiling"
LABEL "com.github.S0AndS0.icon"="tool"
LABEL "com.github.S0AndS0.color"="gray-dark"
COPY lib/test-env-inputs.sh /

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        bats \
        build-essential \
        ca-certificates \
        curl \
        gnupg2 \
        jq \
        make \
        shellcheck && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g typescript && \
	apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["/bin/bash"]
CMD ["/test-env-inputs.sh"]
