package edu.yavirac.crmbackend.feature.opportunity;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface OpportunityRepository extends CrudRepository<Opportunity, Long> {

    List<Opportunity> findAll();

    List<Opportunity> findByDescripcionLikeIgnoreCase(String term);
    
}
