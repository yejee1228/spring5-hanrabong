package com.hanrabong.web.cust;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Lazy
@Component
@AllArgsConstructor
@NoArgsConstructor
public class HCust{
	private String cnum, cid, cpw, cname, gen, birth, skinProb, skinType, 
	child, addr, tel, cpoint;


}



