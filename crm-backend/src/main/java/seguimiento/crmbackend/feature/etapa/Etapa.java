package seguimiento.crmbackend.feature.etapa;


import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("etapas")
public class Etapa{

    @Id
    @Column("etapa_id")
    
    private long etapaId;   
    private String nombre;

    private Date created;
    private Date updated;
    private Boolean enable;


}