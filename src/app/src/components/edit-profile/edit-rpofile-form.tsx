import { City } from "@app/src/types/data-interfaces";
import RegistartionForm from "@components/registration/registration-form";
import { UseRegistrationFormReturnType } from "@hooks/use-form";

interface EditProfileformProps {
  cities: City[];
  form: UseRegistrationFormReturnType;
}

export default function EditProfileform({
  cities,
  form,
}: EditProfileformProps) {
  return <RegistartionForm cities={cities} form={form} />;
}
