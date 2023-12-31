package com.smdesenvolvimento.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .exceptionHandling(customizer -> customizer.authenticationEntryPoint(userAuthenticationEntryPoint))
                .addFilterBefore(new JwtAuthFilter(userAuthenticationProvider), BasicAuthenticationFilter.class)
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(customizer -> customizer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(HttpMethod.POST, "/api/v1/login", "/api/v1/register", "/api/v1/inventory").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/inventory/beverages").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/inventory/{id}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/v1/inventory/{id}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/v1/inventory/{id}").permitAll()
                        .requestMatchers("/","/index.html", "/home", "/login", "/register", "/manage", "/admin").permitAll()
                        .anyRequest().permitAll());
                        // FIX: Configure Spring Security to allow acess to /index.html
        return http.build();
    }
}