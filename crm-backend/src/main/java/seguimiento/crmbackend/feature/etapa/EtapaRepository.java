package seguimiento.crmbackend.feature.etapa;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface EtapaRepository extends CrudRepository<Etapa, Long>{

    List<Etapa> findAll();
}
