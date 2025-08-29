export function calculosEstadisticos(countries){
  
        let totalPoblacion = 0;
        let totalArea = 0;
        let totalPromediosGini = 0;

        // 3️ Recorremos todos los países
        countries.forEach(country => {
            // Sumar población si existe
            if (typeof country.population === "number") {
                totalPoblacion += country.population;
            }

            // Sumar área si existe
            if (typeof country.area === "number") {
                totalArea += country.area;
            }

            // Calcular promedio GINI si existe
            if (country.gini && country.gini instanceof Map) {
                const valoresGini = Array.from(country.gini.values());

                if (valoresGini.length > 0) {
                    const sumaGini = valoresGini.reduce((acc, val) => acc + val, 0);
                    const promedioGini = sumaGini / valoresGini.length;

                    // Acumulamos los promedios
                    totalPromediosGini += promedioGini;
                }
            }

            
        });

        
    return {
        totalArea,
        totalPoblacion,
        totalPromediosGini
    }
}