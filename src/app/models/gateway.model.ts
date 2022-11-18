export class PeripheralDevice {
  uid?: any;
  vendor?: string;
  dateCreated?: string;
  status?: string;
}

export class Gateway {
  _id?: any;
  serialNumber?: string;
  humanReadableName?: string;
  ipv4Address?: string;
  peripheralDevices?: PeripheralDevice[];
}
