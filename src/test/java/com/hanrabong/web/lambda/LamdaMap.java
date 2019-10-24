package com.hanrabong.web.lambda;

import java.util.HashMap;
import java.util.Map;

public class LamdaMap {

	public static void main(String[] args) {
		Map<String, String>map = new HashMap<>();
		map.put("1","1");
		map.put("2","2");
		map.put("3","3");
		map.put("4","4");
		map.forEach((k,v)-> System.out.println("{"+k+", "+v+"}"));
	}

}
