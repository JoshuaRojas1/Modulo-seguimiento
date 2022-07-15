package edu.yavirac.crmbackend.feature.asesor;
import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import lombok.Data;


@Data
public class Asesor {
        @Id
        private long id;
        
        private String nombre;
        private String correo;
        private String telefono;
        private Timestamp created;
        private Timestamp update;
        private Boolean activo;
 }
     

