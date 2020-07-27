# config-default-cjson

Loads a [cjson][1] formatted config file.

This library assumes your project uses two files for configuration:

1. config-default.json
2. config.json

The `config-default.json` file should contain all configuration parameters used by
your program however you should leave sensitive information empty (empty string or
0 or null or an empty array - whatever makes sense).

The `config.json` file will override values from `config-default.json`. This allows
you to keep sensitive information such as developer keys, authentication tokens and
passwords separate from the `config-default.json`.

With this setup you can safely commit the `config-default.json` file to your code
repository with the knowledge that it does not contain any sensitive information.
Since [cjson][1] allows you to insert comments in your json file this means you can
treat the `config-default.json` file as both the default settings and documentation
of your software's configuration.

**Never** commit your `config.json` file into your code repository. The main purpose
of separating it from `config-default.json` is so that custom configurations don't
get committed by accident. If you are using git add it to your `.gitignore`!

## Example usage:

    const config = require('config-default-cjson');


[1]: https://www.npmjs.com/package/cjson