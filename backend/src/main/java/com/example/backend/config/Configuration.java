package com.example.backend.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configurable
@EntityScan(basePackages = {"com.example.backend"})
@EnableJpaRepositories("com.example.backend.repository")
@ComponentScan("com.example.backend")
public class Configuration {
}
