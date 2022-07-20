package seguimiento.crmbackend.feature.etapa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EtapaService {
    
    @Autowired
    EtapaRepository etapaRepository;

    //Crear 
    public Etapa save(Etapa etapa){
        return etapaRepository.save(etapa);
    }

    //Read
    public Etapa findById(long id){
        return etapaRepository.findById(id).orElse(new Etapa());
    }

    //actualizar = crear

    //delete
    public void deleteByID(long id){
        etapaRepository.deleteById(id);
    }

    //registros de permiso en una sola a traves de una lista

    public List<Etapa>findAll(){
        return etapaRepository.findAll();
    }
}
