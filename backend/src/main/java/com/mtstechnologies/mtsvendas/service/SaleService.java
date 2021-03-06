package com.mtstechnologies.mtsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mtstechnologies.mtsvendas.dto.SaleDTO;
import com.mtstechnologies.mtsvendas.dto.SaleSuccessDTO;
import com.mtstechnologies.mtsvendas.dto.SaleSumDTO;
import com.mtstechnologies.mtsvendas.entities.Sale;
import com.mtstechnologies.mtsvendas.repositories.SaleRepository;
import com.mtstechnologies.mtsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;

	/* abaixo uma busca paginada */
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller() {
	return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller() {
	return repository.successGroupedBySeller();
	}
}
