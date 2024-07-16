import React, {useEffect,useState} from 'react';

function Footer() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
   
    return () => clearInterval(intervalId);
  }, []);


  const formatDateTime = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',      
    };
    return date.toLocaleDateString('es-MX', options);
  };

  return (
    <footer>
      <p>&copy; UNIR Tienda Onlinne</p>
      <p>{formatDateTime(dateTime)}</p>
    </footer>
  );
}

export default Footer;