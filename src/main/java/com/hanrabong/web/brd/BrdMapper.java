package com.hanrabong.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface BrdMapper {
	public void insertBrd(Brd param);
	public String countBrd();
	public List<Brd> selectAll();
	public void updateBrd(Brd param);
	public void deleteBrd(Brd param);
	public Brd selectBrd(Brd param);
}
