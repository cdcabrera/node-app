#!/usr/bin/env bash
#
# Failed to run this script... open Terminal and run $ chmod 700 [PATH-TO-REPO]/scripts/semantic.sh
#
# Setup an initial Git Tag for Semantic Releases.
#
# main()
#
{
    git fetch --tags;

    if [[ $(git tag) ]]; then
        echo "tags exist";
    else
        git tag v1.0.0;
        git push --tags;
    fi;
}

