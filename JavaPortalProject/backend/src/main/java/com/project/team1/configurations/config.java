package com.project.team1.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class config  implements WebMvcConfigurer {
	
	public void addCorsMappings(CorsRegistry registry) {
	    registry.addMapping("/**")
	    		.allowedOrigins("http://localhost:3000", "http://192.168.1.38:3000", "http://192.168.1.36:3000")
	            .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
	            .allowedHeaders("*")
	            .allowCredentials(true);
	}

}
