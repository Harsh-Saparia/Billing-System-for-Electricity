export default class bills {
  _id: string;
  user_id: string;
  connection_id: string;
  billing_date: Date;
  current_reading: number;
  last_reading: number;
  fixed_charge: number;
  fuel_charge: number;
  electricity_charge: number;
  current_bill: number;
  previous_due: number;
  total_bill: number;
  status: string
}
