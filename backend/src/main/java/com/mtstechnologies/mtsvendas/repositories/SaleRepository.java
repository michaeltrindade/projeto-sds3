package com.mtstechnologies.mtsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mtstechnologies.mtsvendas.dto.SaleSuccessDTO;
import com.mtstechnologies.mtsvendas.dto.SaleSumDTO;
import com.mtstechnologies.mtsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	//acrescentando um novo metodo customizado para retornar uma lista agrupada
	
	@Query("SELECT new com.mtstechnologies.mtsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))" 
			+ "FROM Sale AS obj  GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();

	@Query("SELECT new com.mtstechnologies.mtsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))" 
			+ "FROM Sale AS obj  GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();


}
