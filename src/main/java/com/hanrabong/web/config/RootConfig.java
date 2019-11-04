package com.hanrabong.web.config;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@MapperScan(basePackages= {"com.hanrabong.web"})
@ComponentScan(basePackages= {"com.hanrabong.web"})
@Import({
	MyBatisConfig.class, ServletConfig.class
})
public class RootConfig {
	
	@Bean
	public DataSource dataSource() {
		
		  DriverManagerDataSource dataSource = new DriverManagerDataSource();

		    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		    dataSource.setUrl("jdbc:mysql://localhost:3306/hanrabong?serverTimezone=UTC");
		    dataSource.setUsername("hanrabong");
		    dataSource.setPassword("hanrabong");

		    return dataSource;
	}
	@Bean
	public DataSourceTransactionManager txManager() {
		return new DataSourceTransactionManager(dataSource());
	}
}