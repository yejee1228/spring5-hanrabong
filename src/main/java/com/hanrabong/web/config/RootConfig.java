package com.hanrabong.web.config;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages= {"com.hanrabong.web"})
@ComponentScan(basePackages= {"com.hanrabong.web"})
public class RootConfig {
	@Bean
	public DataSource dataSource() {
		/*HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/wego?serverTimezone=UTC");
		hikariConfig.setUsername("wego");
		hikariConfig.setPassword("wego");
		
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);*/
		
		  DriverManagerDataSource dataSource = new DriverManagerDataSource();

		    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		    dataSource.setUrl("jdbc:mysql://localhost:3306/hanrabong?serverTimezone=UTC");
		    dataSource.setUsername("hanrabong");
		    dataSource.setPassword("hanrabong");

		    return dataSource;
	}
}