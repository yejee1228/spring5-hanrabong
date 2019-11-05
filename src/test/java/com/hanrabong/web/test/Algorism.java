package com.hanrabong.web.test;

import java.util.Scanner;

public class Algorism {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("시작 0");
		while(scan.nextInt()==0) {
			int BLOCK_SIZE = 5;
			System.out.println("페이지넘버");
			int pageNum = scan.nextInt();
			System.out.println("토탈");
			int totalCount = scan.nextInt();
			System.out.println("페이지사이즈");
			int pageSize = scan.nextInt();
			int pageCount = totalCount/pageSize+((totalCount%pageSize==0)?0:1);
			int startRow = (pageNum-1)*pageSize;
			int endRow = (pageNum==pageCount)?(pageSize*pageNum)-1:totalCount-1;
			int blockCount = pageCount/BLOCK_SIZE+((pageCount%BLOCK_SIZE==0)?0:1);
			int blockNum = (pageNum-1)/BLOCK_SIZE;
			int endPage = (blockNum+1) * BLOCK_SIZE;
			int startPage = endPage-4;
			System.out.println("blockCount:"+blockCount);
			System.out.println("blockNum:"+blockNum);
			System.out.println("startPage:"+startPage);
			System.out.println("endPage:"+endPage);
		}
		
	}

}
