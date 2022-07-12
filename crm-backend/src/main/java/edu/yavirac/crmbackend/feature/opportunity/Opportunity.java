package edu.yavirac.crmbackend.feature.opportunity;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("opportunities")
public class Opportunity {
    @Id
    @Column("opportunity_id")
    private long opportunityId;
    @Column("prospecto_id")
    private long prospectoId;
    private long monto;
    @Column("etapa_id")
    private long etapaId;
    @Column("vendedor_id")
    private long vendedorId;
    @Column("campania_id")
    private long campaniaId;
    private Date created;
    private Date updated;
    private boolean enable;
    
}
