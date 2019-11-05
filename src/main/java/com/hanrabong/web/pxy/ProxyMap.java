package com.hanrabong.web.pxy;

import java.util.HashMap;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class ProxyMap {
	HashMap<String, Object> map;
	public void accept(List<String>x, List<?> y) {
		map=new HashMap<>();
		for(int i = 0; i<x.size(); i++) {
			map.put(x.get(i), y.get(i));
		}
		map.forEach((k,v)->System.out.println(String.format("%s:%s", k,v)));
	}
	public HashMap<String, Object> get(){
		return map;
	}
	
}
