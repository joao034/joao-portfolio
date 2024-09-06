export const SectionTittle = ( { number, title } ) => {
  return (
    <div className="flex items-start">
      <h2 className="text-gray-400 font-bold text-lg flex-shrink-0">
        <span className="text-teal-400 mr-2">{number} - </span>{title}
      </h2>
      {/* <div className="flex-grow">
        <hr className="border-t border-gray-500 opacity-50" style={{ width: '100%' }} />
      </div> */}
    </div>
  );
  
  
  
  
}


