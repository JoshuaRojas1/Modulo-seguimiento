package edu.yavirac.crmbackend.feature.opportunity;


import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
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
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;
    private String descripcion;
    private Long phaseId;

    @MappedCollection(idColumn = "opportunity_id")
    private Set<OpportunityPerson> persons = new HashSet<>();
    
}
