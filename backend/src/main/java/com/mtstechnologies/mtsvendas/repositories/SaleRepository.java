package com.mtstechnologies.mtsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mtstechnologies.mtsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
