process.env.SOME_ENV = true;

module.exports = {
    flowFile: './.node-red/flows.json',
    userDir: './.node-red/',
    credentialSecret: 'dummy',
    functionGlobalContext: {
        // os:require('os'),
        env: process.env,
    },
    logging: {
        console: {
            /** Level of logging to be recorded. Options are:
             * fatal - only those errors which make the application unusable should be recorded
             * error - record errors which are deemed fatal for a particular request + fatal errors
             * warn - record problems which are non fatal + errors + fatal errors
             * info - record information about the general running of the application + warn + error + fatal errors
             * debug - record information which is more verbose than info + info + warn + error + fatal errors
             * trace - record very detailed logging + debug + info + warn + error + fatal errors
             * off - turn off all logging (doesn't affect metrics or audit)
             */
            level: "debug",
            /** Whether or not to include metric events in the log output */
            metrics: false,
            /** Whether or not to include audit events in the log output */
            audit: false
        }
    },
};