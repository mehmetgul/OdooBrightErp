package com.odooBrightERP.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "@target/rerun.txt", //path to features
        glue = "com/odooBrightERP/step_definitions",    //path to step definitions
        plugin = {"html:target/rerun-default-cucumber-reports"//,
        }
)

public class FailedRunner {
}
