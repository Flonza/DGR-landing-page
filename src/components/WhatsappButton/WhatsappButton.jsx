import PropTypes from 'prop-types';

export default function WhatsappButton({ 
    name = 'Cotiza con nosotros',
    phoneNumber = '+573126850983',
    message = 'Hola, me gustaría obtener más información sobre sus servicios.'
  }){
    const handleClick = () => {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };
    return (
        <>
             <button
      onClick={handleClick}
      className="
        flex items-center justify-center
        gap-2 px-6 py-3
        bg-green-700 hover:bg-green-800
        text-white font-bold
        rounded-xl
        transition-all duration-200 ease-in-out
        transform hover:scale-105
        shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        max-h-14
      "
      aria-label={`Contactar por WhatsApp: ${name}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" color="#ffffff"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22"/><path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"/></g></svg>
      <span className="whitespace-nowrap">{name}</span>
    </button>
        </>
    )
}

WhatsappButton.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    message: PropTypes.string
};
  