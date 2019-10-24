package com.hanrabong.web.cust;

import org.springframework.stereotype.Repository;

@Repository
public interface HCustMapper {
	public void insertCust(HCust cust);
	public HCust selectByIdPw(HCust cust);
}
