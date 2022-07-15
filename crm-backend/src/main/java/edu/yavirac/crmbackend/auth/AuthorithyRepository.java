package edu.yavirac.crmbackend.auth;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface AuthorithyRepository extends CrudRepository<Authority, Long> {

    List<Authority> findAll();
    
}
