export const useMail = () => {
    const sendMail = async (email: string, where: string, why: string) => {
      try {
        const payload = {
          email: email,
          where: where,
          why: why,
        };
  
        const response = await fetch('/api/sendMail', {
          method: 'POST', // Cambiar a POST para enviar datos al servidor
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Convertir el objeto a JSON
        });
  
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    };
  
    return {
      sendMail,
    };
  };
  