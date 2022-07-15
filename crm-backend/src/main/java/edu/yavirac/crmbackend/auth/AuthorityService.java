package edu.yavirac.crmbackend.auth;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityService {

    @Autowired
    AuthorithyRepository authorithyRepository;

    //Crear
    public Authority save(Authority authority){

            return authorithyRepository.save(authority);

    }
    //Read
    public Authority findById(long id){

        return authorithyRepository.findById(id).orElse(new Authority());

    }
    //Update = Create

    //Delete

    public void deleteById(long id){

        authorithyRepository.deleteById(id);

    }

    public List<Authority> findAll(){

        return authorithyRepository.findAll();

    }
    
}

