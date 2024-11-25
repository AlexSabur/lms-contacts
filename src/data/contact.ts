import { DateConverter, JsonProperty } from '@paddls/ts-serializer';
import { v4 as uuidv4 } from 'uuid';

class Contact {
    @JsonProperty() id: string = uuidv4()

    @JsonProperty() surname: string = '';

    @JsonProperty() name: string = '';

    @JsonProperty({customConverter: () => DateConverter})
    birthday: Date | null = null;

    @JsonProperty() phone: string = '';

    @JsonProperty() email: string = '';

    @JsonProperty() vk: string = '';
}

export default Contact