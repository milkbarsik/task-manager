import { Flex, Radio, type RadioChangeEvent } from 'antd';
import { type ChangeEvent, type FC } from 'react';

interface Iprops {
	values: string[],
	currentValue: string,
	setState: (e: RadioChangeEvent | ChangeEvent<HTMLTextAreaElement>) => void;
}

const MyRadio:FC<Iprops> = ({values, currentValue, setState}) => {
	return (
		<Flex vertical gap="middle">
			<Radio.Group onChange={(e) => setState(e)} defaultValue={values[0]} value={currentValue}>
				{
					values.map((el) => {
						return <Radio.Button key={el} value={el}>{el}</Radio.Button>
					})
				}
			</Radio.Group>
		</Flex>
	)
};

export default MyRadio;