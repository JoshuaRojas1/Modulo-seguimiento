package edu.yavirac.crmbackend.feature.asesor;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AsesorService {

    @Autowired
    AsesorRepository asesorRepository;


    //Create
    public Asesor save(Asesor asesor){
        return asesorRepository.save(asesor);     
    }
    
    //Read+

    public Asesor findById(long id){
        return asesorRepository.findById(id).orElse(new Asesor());
    }

    //Update = Create -> PUT

    //Delete
    public void deleteById(long id){
        asesorRepository.deleteById(id);
    }

    public List<Asesor> findAll(){
        return asesorRepository.findAll();
    }
}
