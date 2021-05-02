type withTextType = {
  where: {
    $or: { [key: string]: { $regex: string; $options: string } }[];
  };
};

class HotelListQueryBuilder {
  static withText(text?: string): withTextType | undefined {
    if (text === 'undefined') {
      return undefined;
    }
    const matchOptions = { $regex: `${text}.*`, $options: 'i' };
    return {
      where: {
        $or: [
          { name: matchOptions },
          { 'address.cityName': matchOptions },
          { 'address.countryCode': matchOptions },
        ],
      },
    };
  }
}

export default HotelListQueryBuilder;
