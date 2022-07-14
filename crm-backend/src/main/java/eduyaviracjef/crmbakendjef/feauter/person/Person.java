package eduyaviracjef.crmbakendjef.feauter.person;

import java.sql.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

 @Data
 @Table("equipo_ventas")

public class Person {
    @Id
    private long id;
    private String name;
    private String  dni;
    private Date create;
    private Date update;
    private Boolean enable;

}
