const VotingHub = artifacts.require("VotingHubV1");

module.exports = function (deployer) {
    deployer.deploy(VotingHub, '0xa70b419A6028cD48F050d7251cF4Fbbc682CC8AB');
};