FROM node:12

WORKDIR /workdir

## Nope...
#RUN echo "inputs.test_string_one: ${{ inputs.test_string_one }}"

COPY main.js /workdir/

ENTRYPOINT ["node"]
CMD ["/workdir/main.js"]
